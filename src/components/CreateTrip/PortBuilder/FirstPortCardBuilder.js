import React from 'react';
import PortSelectField from '../../FormFields/PortSelectField'
import SingleTimeField from '../../FormFields/SingleTimeField'
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

class FirstPortCardBuilder extends React.Component {
  constructor(props){
    super(props);
    this.grabData = this.grabData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      port: "",
      redirect: false,
      time:'time from component'
    }
  }
  grabData(port, time){
    this.setState({port: port});
  }
  handleSubmit(e){
    e.preventDefault();
    let finalSchedule = `${this.props.hour}:${this.props.min} ${this.props.ampm}`
    let newPort = {date: `${this.props.month}/${this.props.day}/${this.props.year}`, port: this.state.port}
    let sailTime = `${this.props.newCruise.ship} departs at ${this.props.newCruise.finalSchedule}`
    this.props.savePort(newPort);
    this.props.updateDay();
    this.props.setSchedule(sailTime)
    this.setState({redirect: true})
  }
  render() {
    if(this.state.redirect){
      return <Redirect to="/new-trip/step-two/build-trip" />
    } else {
    const { port} = this.state;
    const isEnabled = port.length > 0;
      return (
        <form className="add-first-port" onSubmit={this.handleSubmit}>
          <h6 className="text-center instruction">Lets add your first port</h6>
          <div className="field">
            <span>Starting Port</span> <PortSelectField grabPort={(port) => this.grabData(port)}/>
          </div>
          <div className="field single-time-slot">
            <span>Departure Time</span> 
            <SingleTimeField />
          </div>
          <div className="text-center">
            <input type="submit" value="Add Port"/>
          </div>
        </form>
      );
    }
  }
}

// create props out of data in Store
const mapStateToProps = state => {
  return{
    newCruise: state.newCruiseData,
    month: state.newCruiseData.startDay[0],
    day: state.newCruiseData.cruiseDay,
    year: state.newCruiseData.startDay[2],
    time: state.newCruiseData.startTime.fullTime,
    hour: state.newCruiseData.startTime.hour,
    min: state.newCruiseData.startTime.min,
    ampm: state.newCruiseData.startTime.ampm,
  }
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
  return{
    savePort: (newPort) => dispatch({type: 'SAVE_NEW_PORT', payload: newPort }),
    setSchedule: (newSchedule) => dispatch({type: 'SET_SCHEDULE', payload: newSchedule }),
    updateDay: () => dispatch({type: 'UPDATE_DAY'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPortCardBuilder);