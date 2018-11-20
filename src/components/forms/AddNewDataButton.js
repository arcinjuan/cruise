import React, { Component } from 'react';

class submitButton extends Component {
  constructor(props){
    super(props);
    this.submitData = this.submitData.bind(this)
    this.state = {
      days: [],
    }
  }
  submitData(e){
  	e.preventDefault()
  	console.log(this.props.sendData)
  }
  render() {
    return (
    	<button type="submit" onClick={this.submitData} >Submit</button>
    );
  }
}

export default submitButton;
