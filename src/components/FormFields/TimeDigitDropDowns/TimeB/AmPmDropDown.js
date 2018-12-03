import React, { Component } from 'react';
import {connect} from 'react-redux';



class AmPmDropDown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
    	showDropdown:false,
    	ampm:['am', 'pm'],
    	ampmValue: 'am',
      placeholder: 'placeholder'
    }
  }
  digitSelect(digit){
    this.props.updateAmPm(digit)
    this.handleClick()
  }

  DropDown(){
  	return(
	  	<div className="time-slot-dropdown" ref={node => this.node = node}>
	      <ul>
	      	{this.state.ampm.map((digit, y) => {
	      		return <li key={digit} onClick={() => this.digitSelect(digit)} ref={node => { this.node = node; }}>{digit}</li>
	      	})}
	      </ul>
	  	</div>
  	)
  }
  handleClick() {
    if (!this.state.showDropdown) {
      // if drop down is hidden start listening

      this.setState({showDropdown: true, placeholder: ''})
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      this.setState({showDropdown: false})
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }
  
  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return
    } 
    this.handleClick()
  }
  render() {
    return (
    	<div className="single-time-input-select ampm" >
    		<input type="text" value={this.props.ampm} id="ampm-select" onClick={this.handleClick} className={this.state.placeholder} readOnly/>
				{this.state.showDropdown && this.DropDown()}
      </div>
    );
  }
}

// create props out of data in Store
const mapStateToProps = state => {
  return{
    time: state.newCruiseData.endTime.fullTime,
    hour: state.newCruiseData.endTime.hour,
    min: state.newCruiseData.endTime.min,
    ampm: state.newCruiseData.endTime.ampm,
  }
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
  return{
    updateAmPm: (newAmPm) => dispatch({type: 'UPDATE_AMPM_B', payload: newAmPm })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmPmDropDown);

