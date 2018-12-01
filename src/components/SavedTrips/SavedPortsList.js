import React, { Component }from 'react';
import { connect } from 'react-redux';

const formData = {test: ''}
class savedPortsList extends Component {

  handleSubmit(newTrip) {
    this.props.createTrip(newTrip)
  }
  render() {
    return (
    <ul className="saved-trips-list">
      {this.props.cruises[{this.props.test}].ports.map((port, i) => {
        return ( 
          <li key={i}>{port.port}</li>
        );
      })} 
    </ul>

    );
  }
}

// create props out of data in Store
const mapStateToProps = state => {
	return{
    cruises: state.mainReducer.pastTrips.cruises
	}
}

export default connect(mapStateToProps)(savedPortsList);