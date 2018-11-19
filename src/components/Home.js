import React, { Component } from 'react';
import PastCruisesList from './PastCruisesList';
import { Route, Switch, NavLink} from "react-router-dom";
import PastCruise from './PastCruise';

class PastCruises extends Component {
  constructor(props){
    super(props);
    this.setActiveTrip = this.setActiveTrip.bind(this);

    this.state ={
      activeTrip: undefined
    }
  }

  setActiveTrip(trip){
    this.setState({activeTrip: trip})
  }


  render(){
    return (
        <section>
          <Switch>
            <Route exact path="/" render={(props) => <PastCruisesList setTrip={(trip) => this.setActiveTrip(trip)} />} /> 
            <Route path="/trip/:trip" render={(props) => <PastCruise selectedCruise={this.state.activeTrip} />} />
          </Switch>
        </section>
    );
  }
}



export default PastCruises;
