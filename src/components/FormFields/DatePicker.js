import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

export default class MyForm extends React.Component {
	constructor(props){
		super(props);
		this.handleDayChange = this.handleDayChange.bind(this)
	}
  handleDayChange(day) {
    // let date = this.props.grabDate(day)
    // this.props.onChange('setSail', day);
    this.props.grabDate(day)
  }
  render() {
    return (
      <div>
        <DayPickerInput 
          onDayChange={this.handleDayChange} 
          placeholder={this.props.placeholder} 
          className="test" 
          formatDate={formatDate}
          parseDate={parseDate}/>
      </div>
    );
  }
}