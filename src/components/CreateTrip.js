// ./components/UserForm.js

import React from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';

class createTrip extends React.Component {
  handleSubmit(newTrip) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
    console.log(newTrip)
  }
  render() {
    return (
      <Form
        model="newTripForm"
        onSubmit={(newTrip) => this.handleSubmit(newTrip)}
      >
        <label htmlFor="newTripForm.tripName">Trip Name:</label>
        <Control.text model="newTripForm.tripName" id="newTripForm.tripName" />

        <label htmlFor="newTripForm.setSail">Set Sail Date:</label>
        <Control.text model="newTripForm.setSail" id="newTripForm.setSail" />

        <button type="submit" onClick={this.onIncrementCounter} >
          Finish registration!
        </button> <br />
        {this.props.ctr}
      </Form>
    );
  }
}

// grab data fomr the store and store it in props
const mapStateToProps = state => {
	return{
		ctr: state.sampleData.counter
	}
}

// grab data fomr the store and store it in props
const mapDispatchToProps = dispatch => {
	return{
		onIncrementCounter: () => dispatch({type: 'TEST', val: 5})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(createTrip);