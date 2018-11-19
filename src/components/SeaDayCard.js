import React, { Component } from 'react';

class SeaDayCard extends Component {
  constructor(props){
    super(props);
    this.removeCard = this.removeCard.bind(this);
    this.currentDay = this.props.cardId + 1;
  }
  render() {
    return (
      <div className="small-12 columns card seaday" id={`card-${this.props.cardId}`}>
        <div className="day">
          <span className="day-number">Day {this.currentDay}</span>
          <nav className="card-nav text-right">
            <span className="visible-while-viewing" title="food"><i className="fas fa-utensils"></i></span>
            <span className="visible-while-viewing" title="notes"><i className="fas fa-pencil-alt"></i></span>
            <span className="visible-while-building" ><i className="fas fa-times" onClick={() => this.removeCard(this.props.cardId)}></i></span>
          </nav>
        </div>
        <div className="small-12 columns location">
          <strong>Sea Day</strong>
        </div>
        <div className="small-6 columns"> 
          All Day on the ship
        </div>
        <div className="small-6 columns text-right">
          <i className="fas fa-calendar-alt"></i> {this.props.day}
        </div>
      </div>
    );
  }

  removeCard(index){
    this.props.deleteDay(index);
  }
}

export default SeaDayCard;
