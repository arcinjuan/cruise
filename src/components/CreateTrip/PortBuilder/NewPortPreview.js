import React from 'react';
import {connect} from 'react-redux';
import PortPreviewCard from '../../Cards/PortPreviewCard'


class PortBuilderPreview extends React.Component {
  render() {
  	const cruiseDay = `${this.props.month}/${this.props.day}/${this.props.year}`
    return (
      <div className="port-builder-preview">
      	<h3 className="text-center">{this.props.newCruise.tripName}</h3>
      	<ul>
	      	{this.props.newCruise.ports.map((port, index) => {
	      		return(
	      			<PortPreviewCard key={index} ArrayPortIndex={index}/>
	      		);
	      	})}
	      </ul>
      </div>
    );
  }
}

// create props out of data in Store
const mapStateToProps = state => {
	return{
		newCruise: state.newCruiseData,
		month: state.newCruiseData.startDay[0],
		day: state.newCruiseData.cruiseDay,
		year: state.newCruiseData.startDay[2],
	}
}

export default connect(mapStateToProps)(PortBuilderPreview);