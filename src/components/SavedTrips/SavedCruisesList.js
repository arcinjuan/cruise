import React, { Component }from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

class savedCruisesList extends Component {

  setActiveTrip(trip){
    console.log(trip)
    this.props.setActiveCruise(trip);
    // let cruise = this.state.savedTrips.find(cruise => cruise.url === trip)
    // this.props.setCruise(cruise)
  }
  render() {
    return (
    <ul className="saved-trips-list">
      {this.props.cruises.map((cruise, index) => {
        return ( 
          <li key={index}>
            <NavLink to={`/past-trips/${cruise.id}`} 
                  key={cruise.id}
                  onClick={(trip) => this.setActiveTrip(cruise.id)}><h3>{cruise.tripName}</h3></NavLink>
          </li>
        );
      })} 
    </ul>

    );
  }
}

// 

// create props out of data in Store
const mapStateToProps = state => {
	return{
    cruises: state.pastTrips.cruises,
    logState: state
	}
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
	return{
    setActiveCruise: (activeCruise) => dispatch({type: 'SET_ACTIVE_CRUISE', payload: activeCruise})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(savedCruisesList);