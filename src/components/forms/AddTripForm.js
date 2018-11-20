import React, { Component } from 'react';
import ShipsSelect from './ShipsSelectField'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { ValidatorComponent } from 'react-form-validator-core';

class addTripForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertToUrl = this.convertToUrl.bind(this);
    this.handleSelectData = this.handleSelectData.bind(this);
    this.state = {
      tripName: "",
      url: "",
      cruiseLine: "",
      ship: "",
      setSail: "",
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
  	console.log(this.state.tripName)
  	this.setState({redirect: true})
  }

  handleSelectData(cruiseline, cruiseship) {
  	this.setState({cruiseLine: cruiseline, ship: cruiseship }, () => console.log(this.state))
  }

  render(){
    const redirect = this.state.redirect
    const { tripName, cruiseLine, ship } = this.state;
    const isEnabled = tripName.length > 0 &&
    									cruiseLine.length > 0 &&
    									ship.length > 0;

    if(redirect){
      return <Redirect push to="/add-trip/creating-trip" />
    }

    return (
      <form className="small-12 columns text-center">
      	<input type="text" className="form-field" value={this.state.tripname} onChange={this.convertToUrl} name="tripName" placeholder="What are you calling this trip?"/>
      	<ShipsSelect passData={(cruiseline, cruiseship) => this.handleSelectData(cruiseline, cruiseship)} />
      	<button type="submit" className="submit-buton" onClick={this.handleSubmit} disabled={!isEnabled}>Create This Trip</button>
      </form>
    );
  }
}

export default addTripForm;