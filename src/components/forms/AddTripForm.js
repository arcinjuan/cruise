import React, { Component } from 'react';
import ShipsSelect from './ShipsSelectField';
import DateField from './DateField';
import { Redirect } from 'react-router';

class addTripForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertToUrl = this.convertToUrl.bind(this);
    this.grabDate = this.grabDate.bind(this);
    this.handleSelectData = this.handleSelectData.bind(this);
    this.state = {
      tripName: "",
      url: "",
      cruiseLine: "",
      ship: "",
      setSail: "",
      startDay: "",
      ports:[],
    	redirect: false
    }
  }

  convertToUrl(e){
    const value = e.target.value;
    let safeUrl = value.split(/[_\s]/).join("-")
    this.setState({
        tripName: value,
        url: safeUrl
    });
  }

  handleChange (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
  }

  handleSubmit(e){
  	e.preventDefault();
  	this.setState({redirect: true});

  	const tripName 		= this.state.tripName;
  	const url 				= this.state.url;
  	const cruiseLine 	= this.state.cruiseLine;
  	const ship 				= this.state.ship;
  	const setSail 		= this.state.setSail;
  	const startDay 		= this.state.startDay;
  	this.props.passTripData(tripName, url, cruiseLine, ship, setSail, startDay)
  }

  handleSelectData(cruiseline, cruiseship) {
  	this.setState({cruiseLine: cruiseline, ship: cruiseship })
  	// console.log(this.props)
  }
  grabDate(date){
  	let selectedDate = date.toLocaleDateString();
    let singleDay = selectedDate.split('/');
    this.setState({setSail: selectedDate})
    this.setState({startDay: singleDay[1]})
  }


  render(){
    const redirect = this.state.redirect
    const { tripName, cruiseLine, ship, setSail } = this.state;
    const isEnabled = tripName.length > 0 &&
    									cruiseLine.length > 0 &&
    									ship.length > 0 &&
    									setSail.length > 0;

    if(redirect){
      return <Redirect push to="/add-trip/creating-trip" />
    }

    return (
      <form className="small-12 columns text-center add-trip-form">
      	<input type="text" className="form-field" value={this.state.tripname} onChange={this.convertToUrl} name="tripName" placeholder="What are you calling this trip?"/>
        <DateField grabDate={this.grabDate} placeholder="When do you set sail?" fieldClass="form-field" />
      	<ShipsSelect passData={(cruiseline, cruiseship) => this.handleSelectData(cruiseline, cruiseship)} />
      	<button type="submit" className="submit-buton" onClick={this.handleSubmit} disabled={!isEnabled}>Create This Trip</button>
      </form>
    );
  }
}

export default addTripForm;