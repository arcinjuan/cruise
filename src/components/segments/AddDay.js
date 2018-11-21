import React, { Component } from 'react';
import AddPortForm from '../forms/AddPortForm';
import PortCard from '../cards/PortCard';
import SeaDayCard from '../cards/SeaDayCard';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from "react-router-dom";


import "../../css/tabs.css";

class AddDay extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeDayFromArray = this.removeDayFromArray.bind(this);
    this.state = {
      days: [],
    }
  }
  componentDidUpdate(){
    return scrollToComponent(this.bottomForm);
  }
  componentWillMount(){
    console.log(this.props.receiveData())
  }
  render() {
    return (
      <div>
        <div className="card-builder">
          {this.state.days.map((day, index) => {
            if(day.port === 'Sea Day'){
              return <SeaDayCard port={day.port} day={day.date} schedule={day.schedule} cardId={index} deleteDay={this.removeDayFromArray} key={index} />
            } else {
              return <PortCard port={day.port} day={day.date} schedule={day.schedule} cardId={index} deleteDay={this.removeDayFromArray} key={index} />
            }
          })}
        </div>
        <i className="fas fa-save"></i>
        <i className="fas fa-home"></i>
        <AddPortForm addDay={this.addCard}/>


        <section ref={(section) => { this.bottomForm = section; }}></section>
      </div>
    );
  }


  addCard(port, date, schedule){
    let pushNewDay = [...this.state.days];
    pushNewDay.push({port: port, date: date, schedule: schedule});
    this.setState({days: pushNewDay});
  }
  removeDayFromArray(day) {
    let updatedArray = [...this.state.days];
    updatedArray.splice(day, 1);
    this.setState({days: updatedArray});
  }  
}

export default AddDay;
