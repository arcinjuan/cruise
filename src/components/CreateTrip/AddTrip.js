import React, { Component } from 'react';
import CreateTrip from "./CreateTrip";
import CreatePorts from "./CreatePorts";

import {Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import '../css/progress.css';

class AddTrip extends Component {
  render() {
    return (
      <div className="add-trip row">
       	<div className="form-progress small-12 columns">
          <div className="text-center">
         		<div className="steps">
  	       		<span className="step-one step">Step One</span>
  	       		<span className="step-two step">Step Two</span>
  	       		<div className={this.props.isFirstStep ? 'first-step' : 'second-step' }>
  	       			<div className="step-progress"></div>
  	       		</div>
       		   </div>
          </div>
       		<Switch>
       			<Route path="/new-trip/step-one" component={CreateTrip} />
       			<Route path="/new-trip/step-two" component={CreatePorts} />
       		</Switch>
       	</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return{
		isFirstStep: state.createTrip.isFirstStep
	}
}

export default connect(mapStateToProps)(AddTrip);
