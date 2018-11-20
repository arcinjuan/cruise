import React, { Component } from 'react';
import DateField from './DateField';

class AddSeaDayForm extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.grabDate = this.grabDate.bind(this);

    this.state = {
      selectedDay: undefined
    }
  }
  render() {
    return (
      <form className="small-12 columns card" onSubmit={this.addCard} >
        <div className="small-1 columns icon">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="small-11 columns location" id="dateSelection">
          <DateField grabDate={this.grabDate} />
        </div>
        <nav className="small-12 columns card-nav text-center">
          <button className="addCardButton" type="submit">Add Sea Day</button>
        </nav>
      </form>
    );
  }

  // addCard(e){
  //   e.preventDefault()
  //   let port = 'Sea Day';
  //   let date = document.getElementById('date').value;
  //   this.props.addDay(port, date);
  //   document.getElementById('date').value = '';
  //   window.scrollTo(0,document.querySelector(".cards").scrollHeight);
  // }
  addCard(e){
    e.preventDefault()
    if (this.state.selectedDay === undefined){
      document.getElementById('dateSelection').style.borderBottomColor="red";
    } else {
      let port = 'Sea Day';
      let date = this.state.selectedDay;
      let schedule = 'All Day';
      this.props.addDay(port, date, schedule);
      document.getElementById('dateSelection').style.borderBottomColor="#ccc";

    }
  }
  grabDate(date){
    this.setState({selectedDay: date.toLocaleDateString()})
  }
}

export default AddSeaDayForm;
