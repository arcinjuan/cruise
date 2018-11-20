import React, { Component } from 'react';
import AddTrip from './components/segments/AddTrip';
import Home from './components/segments/Home';
import {Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    	savedDays: []
    }
  }
	showPreviousTrips(){
		const previousTrips = Object.keys(this.state.savedDays);
		previousTrips.map((tripName) => {
			return <li key={tripName}>{tripName}</li>
		})
	}


  render(){
    return (
	      <div className="row cards">
          <Switch>
            <Route path="/add-trip" component={AddTrip} /> 
            <Route path="/" component={Home} />
          </Switch>
	      </div>
    );
  }
}

export default App;