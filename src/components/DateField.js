import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);

  }
  handleDayChange(day) {
    let date = this.props.grabDate(day)
    return date
  }
  render() {
    return (
      <div>
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
    );
  }
}