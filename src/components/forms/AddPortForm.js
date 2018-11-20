import React, { Component } from 'react';
import DateField from './DateField';
import PortField from './PortSelectField';
import TimeField from './TimeField';

class AddPortForm extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.grabDate = this.grabDate.bind(this);
    this.grabActivity = this.grabActivity.bind(this);
    this.grabTime = this.grabTime.bind(this);

    this.state = {
      selectedDay: undefined,
      selectedActivity: undefined,
      selectedTime: '08:00AM - 5:00PM',
      dateFieldValid: false,
      activityFieldValid: false,
      formValid: false
    };
  }

  render() {
    return (
      <form className="small-12 columns card" onSubmit={this.addCard}>
        <div className="small-1 columns icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="small-11 columns location">
          <div id="portSelection">
            <PortField grabActivity={this.grabActivity} />
          </div>
        </div>
        <div className="small-1 columns icon">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="small-11 columns location">
          <div id="dateSelection">
            <DateField grabDate={this.grabDate} />
          </div>
        </div>
        <div className="small-1 columns icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="small-11 columns location" >
          <TimeField grabTime={this.grabTime} />
        </div>
        <nav className="small-12 columns card-nav text-center">
          <button className="addCardButton" type="submit">Add Port</button>
        </nav>
      </form>
    );
  }

  addCard(e){
    e.preventDefault()
    if(this.state.selectedActivity === undefined){
      document.getElementById('portSelection').style.borderBottomColor="red";
    } else if (this.state.selectedDay === undefined){
      document.getElementById('dateSelection').style.borderBottomColor="red";
    } else {
      let port = this.state.selectedActivity;
      let date = this.state.selectedDay;
      let schedule = this.state.selectedTime;
      this.props.addDay(port, date, schedule);
      document.getElementById('dateSelection').style.borderBottomColor="#ccc";
      document.getElementById('portSelection').style.borderBottomColor="#ccc";

    }
  }

  grabActivity(activity){
    this.setState({selectedActivity: activity})
    // console.log(activity)
  }

  grabDate(date){
    this.setState({selectedDay: date.toLocaleDateString()})
  }

  grabTime(schedule){
    this.setState({selectedTime: schedule})
  }

}

export default AddPortForm;
