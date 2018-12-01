// ./components/UserForm.js

import React from 'react';
import FirstPortCardBuilder from './PortBuilder/FirstPortCardBuilder';
import LastPortCardBuilder from './PortBuilder/LastPortCardBuilder';
import PortCardBuilder from './PortBuilder/PortCardBuilder';
import NewPortPreview from './PortBuilder/NewPortPreview';
import { connect } from 'react-redux';
import {Route, Switch } from "react-router-dom";

class CreatePorts extends React.Component {
  constructor(props){
    super(props);
    this.state ={
    }
  }
  // set step progress to second step
  componentDidMount(){
    if(window.location.href.indexOf('step-two') > -1) {
      this.props.setStepProgress()
      console.log(this.props.newCruise)
    }
  }
  saveTrip(e) {
  	e.preventDefault()
  	console.log('click')
  	this.props.saveTrip()
  }
  render() {
    return (
      <div className="add-ports-form">


        <NewPortPreview />
        <hr />

          <Switch>
            <Route path="/new-trip/step-two/start-trip" component={PortCardBuilder} />
            <Route path="/new-trip/step-two/build-trip" component={PortCardBuilder} />
            <Route path="/new-trip/step-two/end-trip" component={LastPortCardBuilder} />
          </Switch>
 
      </div>
    );
  }
}

// create props out of data in Store
const mapStateToProps = state => {
	return{
		newCruise: state.newCruiseData
	}
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
	return{
    saveTrip: () => dispatch({type: 'SAVE_NEW_TRIP'}),
    setStepProgress: () => dispatch({type: 'SET_STEP_PROGRESS', payload: false})
	}
}
            // <Route path="/new-trip/step-two/start-trip" component={FirstPortCardBuilder} />

export default connect(mapStateToProps, mapDispatchToProps)(CreatePorts);