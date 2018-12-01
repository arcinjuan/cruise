import React, { Component } from 'react';
import HourTimeField from './TimeDigitDropDowns/TimeA/HourDropDown';
import MinTimeField from './TimeDigitDropDowns/TimeA/MinDropDown';
import AmPmDropDown from './TimeDigitDropDowns/TimeA/AmPmDropDown';
import {connect} from 'react-redux';
import '../css/time-select.css'

export default class SingleTimeField extends Component {
  render() {
    return (
    	<div className="dropdowns">
    		<HourTimeField />:
    		<MinTimeField  />  
    		<AmPmDropDown /> 
      </div>
    );
  }
}