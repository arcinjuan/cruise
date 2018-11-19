import React, { Component } from 'react';
import PastCruiseCard from './PastCruiseCard';
import { Redirect } from 'react-router'


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
      <CheckIfCruiseIsSelected cruiseIsSelected={this.props.selectedCruise} />

    );
  }
}

function CheckIfCruiseIsSelected(props){
  const CruiseIsSelected = props.cruiseIsSelected
  if(CruiseIsSelected){
    return <PastCruiseCard
      title={CruiseIsSelected.tripName}
      cruiseLine={CruiseIsSelected.cruiseLine}
      ship={CruiseIsSelected.ship}
      day={CruiseIsSelected.date}
      ports={CruiseIsSelected.ports} 
     />
   } else {
    return <Redirect to="/"/>
   }
}

export default PastCruise;
      

