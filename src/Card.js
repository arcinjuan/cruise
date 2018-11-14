import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="small-12 columns card" id={`card-${this.props.cardId}`}>
        <span className="close" onClick={() => this.closeCard(this.props.cardId) }><i className="fas fa-times"></i></span>
        <div className="small-1 columns icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="small-11 columns location">
          <p>{this.props.port}</p>
        </div>
        <div className="small-1 columns icon">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <div className="small-11 columns location">
          <p>{this.props.date}</p>
        </div>
      </div>
    );
  }

  closeCard(index){
    this.props.deleteDay(index);
  }
}

export default Card;
