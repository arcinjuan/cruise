import React, { Component } from 'react';
import { connect } from 'react-redux';

class PortPreviewCard extends Component {
  constructor(props){
    super(props);
    this.removeCard = this.removeCard.bind(this);
  }
  componentDidMount(){
    console.log(this.props.timeMessage)
  }
  render() {
    let day = this.props.ArrayPortIndex + 1
    let newSchedule = this.props.newCruisePort[this.props.ArrayPortIndex].schedule
    return (
      <div className="small-12 columns card" id={`card-${this.props.ArrayPortIndex}`}>
        <div className="day">
          <span className="day-number">Day {day}</span>
          <nav className="card-nav text-right">
          <span className="visible-while-viewing" title="meals"><i className="fas fa-utensils"></i></span>
          <span className="visible-while-viewing" title="sights"><i className="fas fa-binoculars"></i></span>
          <span className="visible-while-viewing" title="notes"><i className="fas fa-pencil-alt"></i></span>
          <span className="visible-while-building"><i className="fas fa-times" onClick={() => this.removeCard(this.props.cardId)}></i></span>
          </nav>
        </div>
        <div className="small-12 columns port-date">
          <i className="fas fa-calendar-alt"></i> {this.props.newCruisePort[this.props.ArrayPortIndex].date}
        </div>
        <div className="small-12 columns location">
          <i className="fas fa-map-marker-alt"></i> {this.props.newCruisePort[this.props.ArrayPortIndex].port}
        </div>
        <div className="small-12 columns port-schedule"> 
           <i className="fas fa-clock"></i> {newSchedule} 
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
    newCruisePort: state.newCruiseData.ports,
    ship: state.newCruiseData.ship,
    day: state.newCruiseData.cruiseDay,
    timeA: state.newCruiseData.startTime.fullTime,
    timeB: state.newCruiseData.endTime.fullTime,
    seaDay: state.newCruiseData.seaDay,
    timeMessage: state.newCruiseData.schedule
  }
}

export default connect(mapStateToProps)(PortPreviewCard);
