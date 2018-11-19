import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SavedCruises from '../json/savedCruises';

class PastCruisesList extends Component {
  constructor(props){
    super(props);
    this.setActiveTrip = this.setActiveTrip.bind(this);
    this.state = {
      savedTrips: [],
      activeTrip: undefined
    }
    for (var i in SavedCruises.pastCruises){
      this.state.savedTrips.push({
        tripName: SavedCruises.pastCruises[i].tripName,
        cruiseLine: SavedCruises.pastCruises[i].cruiseLine,
        ship: SavedCruises.pastCruises[i].ship,
        date: SavedCruises.pastCruises[i].setSail,
        ports: SavedCruises.pastCruises[i].ports,
        url: SavedCruises.pastCruises[i].url
      })
    }
  }

  setActiveTrip(trip){
    let cruise = this.state.savedTrips.find(cruise => cruise.url === trip)
    this.props.setCruise(cruise)
  }


  render(){
    return (
      <div className="small-12 columns trip-list">
        <h4 className="text-center">Saved Cruises</h4>
        <ul className="small-12 columns">
          {this.state.savedTrips.map((trip, index) => {
            return <li key={trip.url}>
              <Link to={`/trip/${trip.url}`} onClick={() => this.setActiveTrip(trip.url)} >{trip.tripName}</Link></li> 
          })}
        </ul>
      </div>
    );
  }
}



export default PastCruisesList;
