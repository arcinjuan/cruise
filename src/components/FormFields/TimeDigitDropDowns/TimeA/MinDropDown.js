import React, { Component } from 'react';
import {connect} from 'react-redux';



class MinDropDown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
    	showDropdown:false,
    	min:['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
    	minValue: '00',
      placeholder: 'placeholder'
    }

  }
  digitSelect(digit){
  	this.props.updateMin(digit)
    this.handleClick()
  }

  DropDown(){
  	return(
	  	<div className="time-slot-dropdown" ref={node => this.node = node}>
	      <ul>
	      	{this.state.min.map((digit, y) => {
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
    	<div className="single-time-input-select">
    		<input type="text" value={this.props.min} id="min-select" onClick={this.handleClick} className={this.state.placeholder} readOnly />
				{this.state.showDropdown && this.DropDown()}
      </div>
    );
  }
}

// create props out of data in Store
const mapStateToProps = state => {
  return{
    time: state.newCruiseData.startTime.fullTime,
    hour: state.newCruiseData.startTime.hour,
    min: state.newCruiseData.startTime.min,
    ampm: state.newCruiseData.startTime.ampm,
  }
}

// send data via dispatch
const mapDispatchToProps = dispatch => {
  return{
    updateMin: (newMin) => dispatch({type: 'UPDATE_MIN_A', payload: newMin })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinDropDown);
