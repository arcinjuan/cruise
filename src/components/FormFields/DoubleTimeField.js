import React, { Component } from 'react';
import HourTimeFieldA from './TimeDigitDropDowns/TimeA/HourDropDown';
import MinTimeFieldA from './TimeDigitDropDowns/TimeA/MinDropDown';
import AmPmDropDownA from './TimeDigitDropDowns/TimeA/AmPmDropDown';
import HourTimeFieldB from './TimeDigitDropDowns/TimeB/HourDropDown';
import MinTimeFieldB from './TimeDigitDropDowns/TimeB/MinDropDown';
import AmPmDropDownB from './TimeDigitDropDowns/TimeB/AmPmDropDown';
import {connect} from 'react-redux';
import '../css/time-select.css'

class DoubleTimeField extends Component {
	componentDidMount(){
		this.props.setTimeMessage()
	}
  render() {
    return (
    		<div>
          <div className="field single-time-slot">
          	<span>arrive at</span>
			    	<div className="dropdowns">
			    		<HourTimeFieldA />:
			    		<MinTimeFieldA  />  
			    		<AmPmDropDownA /> 
			      </div>
			     </div>          
			     <div className="field single-time-slot">
          	<span>departs at</span>
			    	<div className="dropdowns">
			    		<HourTimeFieldB />:
			    		<MinTimeFieldB  />  
			    		<AmPmDropDownB /> 
			      </div>
			     </div>
			  </div>
    );
  }
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
  return{
    setTimeMessage: () => dispatch({type: 'SET_TIME_MESSAGE', payload: 2 })
  }
}

export default connect(null, mapDispatchToProps)(DoubleTimeField);
