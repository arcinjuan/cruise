import React from 'react';
import TimeRangeSlider from 'react-time-range-slider';
import 'react-day-picker/lib/style.css';

export default class TimeField extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = {
      value: {
        start: "08:00",
        end: "17:00"
      }
    }
  }

  

  convertFromMilitary(time) {
   // Check correct time format and split into components
   time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

  handleTimeChange(value) {
    let arrive = this.convertFromMilitary(value.start);
    let depart = this.convertFromMilitary(value.end);

    this.setState({value:value})

    let schedule = arrive + ' - ' + depart
    let timeRange = this.props.grabTime(schedule)
  }
  render() {
    return (
      <div>
        <p>{this.convertFromMilitary(this.state.value.start)} - {this.convertFromMilitary(this.state.value.end)}</p>
        <TimeRangeSlider value={this.state.value} onChange={this.handleTimeChange}/>
      </div>
    );
  }
}