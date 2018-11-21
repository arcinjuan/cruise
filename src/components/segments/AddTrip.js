import React, { Component } from 'react';
import AddTripForm from '../forms/AddTripForm';
import AddDay from '../segments/AddDay';
import Loading from '../segments/Loading';
import {Route, Switch } from "react-router-dom";

class AddTrip extends Component {
  constructor(props){
    super(props);
    this.handleNewTripData = this.handleNewTripData.bind(this);
    this.sendDataToAddPorts = this.sendDataToAddPorts.bind(this);
    this.state = {
      data: {
        tripName: "",
        url: "",
        cruiseLine: "",
        ship: "",
        setSail: "",
        ports:[],
        startDay: null
      }
    }
  }
  handleNewTripData(tripName, url, cruiseLine, ship, setSail, startDay){
    this.setState({tripName: tripName});
    this.setState({url: url});
    this.setState({cruiseLine: cruiseLine});
    this.setState({ship: ship});
    this.setState({setSail: setSail});
    this.setState({startDay: startDay});
  }

  sendDataToAddPorts(){
    const newTrip = {
        tripName: this.state.tripName,
        url: this.state.url,
        cruiseLine: this.state.cruiseLine,
        ship: this.state.ship,
        setSail: this.state.setSail,
        startDay: this.state.startDay
    }
    return newTrip
  }


  render() {
    return (  
          <Switch>
            <Route path="/add-trip/create-trip" render={(props) => <AddTripForm passTripData={(tripName, url, cruiseLine, ship, setSail, startDay) => this.handleNewTripData(tripName, url, cruiseLine, ship, setSail, startDay)} />} />
            <Route path="/add-trip/creating-trip" component={Loading} /> 
            <Route path="/add-trip/add-ports" render={(props) => <AddDay receiveData={() => this.sendDataToAddPorts()} />} />
          </Switch>
    );
  }
}

export default AddTrip;