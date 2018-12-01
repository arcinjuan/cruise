import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PortCard from '../Cards/PortCard';

class PastCruises extends Component {
  render(){
  	if (this.props.activeCruise === null){

	    return (
	    	<div className="past-cruise-card">
	    		<Redirect to="/" />
		    </div>
	    );
  	} else {
	    return (
	    	<div className="past-cruise-card">
	    		{this.props.activeCruise.ports.map((port, index) => {
	    			return <PortCard key={index} ArrayPortIndex={index}/>
	    		})}
		    </div>
	    );
	  }
	}
}

// create props out of data in Store
const mapStateToProps = state => {
	return{
    // cruises: state.pastTrips.cruises,
    activeCruise: state.activeCruise
	}
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
	return{
    setActiveCruise: (activeCruise) => dispatch({type: 'SET_ACTIVE_CRUISE', payload: activeCruise})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PastCruises);