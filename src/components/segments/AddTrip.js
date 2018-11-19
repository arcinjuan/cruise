import React, { Component } from 'react';
import SubmitButton from '../forms/AddNewDataButton'

class AddTrip extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      data: {
        tripName: "",
        url: "",
        cruiseLine: "",
        ship: "",
        setSail: ""
      }
    }
  }
  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    }, () => console.log(this.state));
  }
  handleSubmit(e){
    e.preventDefault()
    const dataObj = this.state
    dataObj.map((key, index) => {
      console.log(key, index)
    })
  }

  render() {
    return (
      <form >
        <input type="text" name="tripName" placeholder="Enter a name for your trip" value={this.state.tripName} onChange={this.handleChange}/>
        <input type="text" name="cruiseLine" placeholder="Enter a name for your trip" value={this.state.cruiseLine} onChange={this.handleChange}/>
        <input type="text" name="ship" placeholder="Enter a name for your trip" value={this.state.ship}  onChange={this.handleChange}/>
        <input type="text" name="setSail" placeholder="Enter a name for your trip" value={this.state.setSail} onChange={this.handleChange} />
        <input type="submit" onClick={this.handleSubmit} />
        
      </form>
    );
  }
}

export default AddTrip;
// <SubmitButton tripName={} url={} cruiseLine={} ship={} setSail={} />