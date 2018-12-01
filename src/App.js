import React, { Component } from 'react';
import Home from './components/Home.js';
import AddTrip from './components/CreateTrip/AddTrip.js';
import PastTrips from './components/SavedTrips/PastTrips.js';
// import CreateTrip from './components/CreateTrip.js';
import {Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
      		<Route exact path="/" component={Home} />
      		<Route path="/new-trip/" component={AddTrip} />
      		<Route path="/past-trips" component={PastTrips} />
        </Switch>
      </div>
    );
  }
}

export default App;
