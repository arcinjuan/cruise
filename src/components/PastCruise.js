import React, { Component } from 'react';
import PastCruiseCard from './PastCruiseCard';

class PastCruise extends Component {
  constructor(props){
    super(props);
    this.state = {
      cruise: undefined
    }
  }

  componentWillMount(){
    this.setState({cruise: this.props.selectedCruise}, console.log(this.state.cruise))
  }

  render(){
    return (
      <PastCruiseCard
        title={this.props.selectedCruise.tripName}
        cruiseLine={this.props.selectedCruise.cruiseLine}
        ship={this.props.selectedCruise.ship}
        day={this.props.selectedCruise.date}
        ports={this.props.selectedCruise.ports} 
       />
    );
  }
}



export default PastCruise;
