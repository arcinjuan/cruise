import React, { Component } from 'react';
import SavedCruisesList from './SavedCruisesList';
import PastCruises from './PastCruises';
import {Route, Switch } from "react-router-dom";
import {NavLink } from "react-router-dom";

class PastTrips extends Component {
  render() {
    return (
      <div className="past-trips">
      	<p><NavLink exact to="/"><i className="fas fa-home"></i> Home</NavLink></p>
          <Switch>
        		<Route exact path="/past-trips" component={SavedCruisesList} />
            <Route path="/past-trips/:trip" component={PastCruises} />
          </Switch>
      </div>
    );
  }
}

export default PastTrips;
