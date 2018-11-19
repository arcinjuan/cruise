import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SavedCruises from './savedCruises';
import CruiseList from './CruiseList';
import { Route, Switch, NavLink} from "react-router-dom";
import { withRouter } from 'react-router-dom'

class PastCruisesList extends Component {
  constructor(props){
    super(props);
    this.setCruise = this.setCruise.bind(this);
    this.state = {
      activeTrip: undefined,
      test: 'juan'
    }
  }

  // set the activeTrip in state (passed from CruiseList component)
  setCruise(pastCruise){
    this.setState({activeTrip: pastCruise}, () => console.log(this.state))
  }
  passActiveCruiseBetweenComponents(activeCruise){
    this.props.setTrip(activeCruise)
  }


  render(){
    return (
      <div>
        <div className="addNewDayIcon text-center small-12 columns">
          <NavLink exact to="/add-day">
            <i className="fas fa-plus-circle"></i><br />
            Add New Cruise
          </NavLink>
        </div>
        <CruiseList setCruise={(pastCruise) => this.passActiveCruiseBetweenComponents(pastCruise)}/>
      </div>
    );
  }
}



export default PastCruisesList;
