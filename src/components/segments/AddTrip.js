import React, { Component } from 'react';
import SubmitButton from '../forms/AddNewDataButton';
import AddTripForm from '../forms/AddTripForm';
import AddDay from '../segments/AddDay';
import Loading from '../segments/Loading';
import {Route, Switch } from "react-router-dom";

class AddTrip extends Component {
  constructor(props){
    super(props);
    this.startCreatingTrip = this.startCreatingTrip.bind(this)
    this.finsihCreatingTrip = this.finsihCreatingTrip.bind(this)
    this.state = {
      data: {
        tripName: "",
        url: "",
        cruiseLine: "",
        ship: "",
        setSail: "",
        ports:[]
      }
    }
  }
  startCreatingTrip(){
    console.log('saved')
  }

  finsihCreatingTrip(){
    console.log('saved')
  }

  render() {
    return (  
          <Switch>
            <Route path="/add-trip/create-trip" component={AddTripForm} /> 
            <Route path="/add-trip/creating-trip" component={Loading} /> 
            <Route path="/add-trip/add-ports" component={AddDay} />
          </Switch>
    );
  }
}

export default AddTrip;
// <SubmitButton tripName={} url={} cruiseLine={} ship={} setSail={} />