import React, { Component } from 'react';

import CruiseShips from '../json/cruiseships'
import Select from 'react-select';
import '../../css/inputs.css'

let cruiseLineOptions = [];
let cruiseShipOptions = []

for (var i in CruiseShips.cruiseLines){
	const cruiseline = CruiseShips.cruiseLines[i].cruiseline;
	cruiseLineOptions.push({value: cruiseline, label: cruiseline})
}

export default class ShipsSelect extends Component {
  constructor(props) {
    super(props);
    this.handleCruiseLineChange = this.handleCruiseLineChange.bind(this);
    this.handleCruiseShipChange = this.handleCruiseShipChange.bind(this);
    this.transferData = this.transferData.bind(this);
    this.grabCruiseShips = this.grabCruiseShips.bind(this);

    this.state = {
    	selectedCruiseLine: null,
    	selectedCruiseShip: null,
    	showCruisShipSelection: false
    }

  }
  grabCruiseShips(cruiseline){
  	let cruise = CruiseShips.cruiseLines.find( cruise => cruise.cruiseline === cruiseline.value)
  	for(var ship in cruise.ships){
  		cruiseShipOptions.push({value: cruise.ships[ship], label: cruise.ships[ship]})
  	}
  	this.setState({showCruisShipSelection: true});

  }
  handleCruiseLineChange(selectedCruiseLine) {
    cruiseShipOptions = []
    this.setState({selectedCruiseShip: null})
  	this.setState({ selectedCruiseLine }, this.grabCruiseShips(selectedCruiseLine));
  }
  handleCruiseShipChange(selectedCruiseShip) {
  	this.setState({ selectedCruiseShip }, this.transferData);
  }
  transferData(){
  	let line = this.state.selectedCruiseLine.value
  	let ship = this.state.selectedCruiseShip.value
  	this.props.passData(line, ship)
  }
  render() {
    const { selectedCruiseLine } = this.state;
    const { selectedCruiseShip } = this.state;

    if(cruiseShipOptions.length === 0){
    	return (
    	<div className="select-fields">
	      <Select
	        value={selectedCruiseLine}
	        onChange={this.handleCruiseLineChange}
	        options={cruiseLineOptions}
	        className="shipSelection small-12 columns  form-field"
		      placeholder="What cruise line are you sailing with?"
	      /> 
	    </div>

	    );
    } else {
	    return (
	    	<div className="select-fields">
		      <Select
		        value={selectedCruiseLine}
		        onChange={this.handleCruiseLineChange}
		        options={cruiseLineOptions}
		        className="shipSelection form-field"
		        placeholder="What cruise line are you sailing with?"
		      />
		      <Select
		        value={selectedCruiseShip}
		        onChange={this.handleCruiseShipChange}
		        options={cruiseShipOptions}
		        className="shipSelection form-field"
		      	placeholder="What Ship will you be on?"
		      />
		      
		      
		    </div>
	    );
	  }
  }
}




