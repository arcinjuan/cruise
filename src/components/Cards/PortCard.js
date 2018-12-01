import React, { Component } from 'react';
import { connect } from 'react-redux';

class PortCard extends Component {
  constructor(props){
    super(props);
    this.removeCard = this.removeCard.bind(this);
  }
  render() {
    return (
      <div className="small-12 columns card text-left" id={`card-${this.props.ArrayPortIndex}`}>
        <div className="day">
          <span className="day-number">Day {this.props.ArrayPortIndex + 1}</span>
          <nav className="card-nav text-right">
          <span className="visible-while-viewing" title="meals"><i className="fas fa-utensils"></i></span>
          <span className="visible-while-viewing" title="sights"><i className="fas fa-binoculars"></i></span>
          <span className="visible-while-viewing" title="notes"><i className="fas fa-pencil-alt"></i></span>
          <span className="visible-while-building"><i className="fas fa-times" onClick={() => this.removeCard(this.props.cardId)}></i></span>
          </nav>
        </div>
        <div className="small-12 columns location">
          <strong>{this.props.activeCruise[this.props.ArrayPortIndex].port}</strong>
        </div>
        <div className="small-6 columns port-schedule"> 
          {this.props.activeCruise[this.props.ArrayPortIndex].schedule}
        </div>
        <div className="small-6 columns text-right port-date">
          <i className="fas fa-calendar-alt"></i> {this.props.activeCruise[this.props.ArrayPortIndex].date}
        </div>

      </div>
    );
  }

  removeCard(index){
    this.props.deleteDay(index);
  }
}

// create props out of data in Store
const mapStateToProps = state => {
  return{
    activeCruise: state.activeCruise.ports
  }
}

export default connect(mapStateToProps)(PortCard);
