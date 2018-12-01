import React, { Component } from 'react';

import CruiseShips from '../../json/cruiseships';
import Select from 'react-select';
import '../css/inputs.css'

// handle animations
import fadeInDown from 'react-animations/lib/fade-in';
import Radium, {StyleRoot} from 'radium';

let cruiseLineOptions = [];
let cruiseShipOptions = []

for (var i in CruiseShips.cruiseLines){
	const cruiseline = CruiseShips.cruiseLines[i].cruiseline;
	cruiseLineOptions.push({value: cruiseline, label: cruiseline})
}

const enterAnimationStyles = {
  fadeInDown: {
    animation: 'x .8s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
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
        <div className="field">
  	      <Select
    	        value={selectedCruiseLine}
    	        onChange={this.handleCruiseLineChange}
    	        options={cruiseLineOptions}
              className="Selection"
              classNamePrefix="select-field"
    		      placeholder="What cruise line are you sailing with?"
    	     /> 
        </div>
	    </div>

	    );
    } else {
	    return (
	    	<div className="select-fields">
          <div className="field">
  		      <Select
  		        value={selectedCruiseLine}
  		        onChange={this.handleCruiseLineChange}
  		        options={cruiseLineOptions}
              className="Selection"
              classNamePrefix="select-field"
  		        placeholder="What cruise line are you sailing with?"
  		      />
          </div>
          <StyleRoot>
            <div style={enterAnimationStyles.fadeInDown}>
              <div className="field">
      		      <Select
      		        value={selectedCruiseShip}
      		        onChange={this.handleCruiseShipChange}
      		        options={cruiseShipOptions}
                  className="Selection"
                  classNamePrefix="select-field"
      		      	placeholder="What Ship will you be on?"
                  
      		      />
              </div>
            </div>
          </StyleRoot>
		      
		      
		    </div>
	    );
	  }
  }
}




