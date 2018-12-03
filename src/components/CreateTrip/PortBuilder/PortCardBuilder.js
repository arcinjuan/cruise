import React from 'react';
import PortSelectField from '../../FormFields/PortSelectField'
import DoubleTimeField from '../../FormFields/DoubleTimeField'
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

class PortCardBuilder extends React.Component {
  constructor(props){
    super(props);
    this.grabData = this.grabData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSeaDayClick = this.handleSeaDayClick.bind(this)
    this.handleLastDayClick = this.handleLastDayClick.bind(this)


    this.state = {
      port: "",
      redirect: false,
      seaDay: false,
      lastDay: false,
      activateButton: '',
      portSegment: 'portDay',
      newCardData: {
      	schedule: 'portDay',
      	date: `${this.props.month}/${this.props.day}/${this.props.year}`,
      	port: ''
      }

    }
  }
  grabData(port){
    this.state.newCardData.port = port;
  }
  determineDaytype(){
  	if(this.props.timeB === this.state.newCardData.schedule){
  		console.log('same')
  	}else{
  		this.state.newCardData.schedule = this.props.timeB 
	  	// console.log(this.props.portSegment)
	  	// if(this.props.portSegment === 'departure'){
	   //    console.log('a')
	   //    this.state.newCardData.schedule =  `${this.props.timeA}`; 
	   //    this.props.savePort(this.state.newCardData);
	   //  } 
	   //  else if(this.props.portSegment == 'portDay'){
	   //    this.state.newCardData.schedule = this.props.timeB
	   //    console.log(this.state.newCardData)
	   //    this.props.savePort(this.state.newCardData);
	   //  }
	   //  else if(this.props.portSegment === 'seaDay'){
	   //    console.log('c')
				// this.state.newCardData.schedule =  'seaday'
	   //    this.props.savePort(this.state.newCardData);
	   //  }
	   //  else if(this.props.portSegment === 'arrival'){
	   //    console.log('d')
	   //    this.state.newCardData.schedule =   `${this.props.timeA} - ${this.props.timeB}`
	   //    this.props.savePort(this.state.newCardData);
    // 	}
    }
    console.log(this.state.newCardData)
    this.props.savePort(this.state.newCardData);
  }
  handleSubmit(e){
      console.log('1')
    e.preventDefault();
    this.determineDaytype()
    this.props.updateDay();
    this.setState({redirect: true})
  }
  handleSeaDayClick(){
  	if(this.state.seaDay === false){
  		this.setState({seaDay: true, lastDay: false, activateButton: 'sea-day'})
  		this.props.setSeaDay()
  	} else {
  		this.setState({seaDay: false, activateButton: ''})
  		this.props.undueSeaDay()

  	}
  }
  handleLastDayClick(){
  	if(this.state.lastDay === false){
  		this.setState({seaDay: false, lastDay: true, activateButton: 'last-day'})
  	} else {
  		this.setState({lastDay: false, activateButton: ''})
  	}
  }
  ItsASeaDay(){
  	return(
  		<div className="field"><span>schedule</span> You're at sea all day</div>
  	)
  }
  render() {
  	let today = this.props.month + '/' + this.props.day + '/' + this.props.year 
    // if(this.state.redirect){
    //   return <Redirect to="/new-trip/step-two/start-trip" />
    // } else {
      return (
        <form className="add-first-port" onSubmit={this.handleSubmit}>
          <h6 className="text-center instruction">Lets add your next port</h6>
          <div className="field">
          	<span>is this day either: </span>
          		<div className={`set-day for-sea-day ${this.state.activateButton}`}
          			onClick={this.handleSeaDayClick}>Sea Day</div>
          		<div className={`set-day for-last-day ${this.state.activateButton}`}
          			onClick={this.handleLastDayClick}>Last Day</div>
          </div>
          <div className="field">
            <span>location on <strong>{ today}</strong></span> <PortSelectField grabPort={(port) => this.grabData(port)}/>
          </div>
          {!this.state.seaDay && <DoubleTimeField />}
          {this.state.seaDay && this.ItsASeaDay()}
          <div className="text-center">
            <input type="submit" value="Add This Day"/>
          </div>
        </form>
      );
    // }
  }
}

// create props out of data in Store
const mapStateToProps = state => {
  return{
    newCruise: state.newCruiseData,
    month: state.newCruiseData.startDay[0],
    day: state.newCruiseData.cruiseDay,
    year: state.newCruiseData.startDay[2],
    timeA: state.newCruiseData.startTime.fullTime,
    timeB: state.newCruiseData.endTime.fullTime,
    portSegment: state.newCruiseData.portSegment,
  }
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
  return{
    savePort: (newPort) => dispatch({type: 'SAVE_NEW_PORT', payload: newPort }),
    updateDay: () => dispatch({type: 'UPDATE_DAY'}),
    setSeaDay: () => dispatch({type: 'SET_TIME_MESSAGE', payload: 'seaDay' }),
    undueSeaDay: () => dispatch({type: 'SET_TIME_MESSAGE', payload: 'portDay' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortCardBuilder);