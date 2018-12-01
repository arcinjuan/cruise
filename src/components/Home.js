import React, { Component } from 'react';
// import CreateTrip from './components/CreateTrip.js';
import {NavLink} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="home-page-links">
          <NavLink exact to="/new-trip/step-one">
            <i className="fas fa-plus-circle"></i><br />
            Add New Cruise
          </NavLink>    <br />    
          <NavLink exact to="/past-trips">
            <i className="fas fa-ship"></i><br />
            Past Cruises
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
