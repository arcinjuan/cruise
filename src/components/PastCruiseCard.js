import React, { Component } from 'react';
import PortCard from './PortCard';
import SeaDayCard from './SeaDayCard';
import { Link } from "react-router-dom";
import '../css/individual-day.css'

class PastCruiseCard extends Component {
	constructor(props){
		super(props);
		this.toggleInfo = this.toggleInfo.bind(this);
		this.togglePortList = this.togglePortList.bind(this);
		this.state = {
			showInfo: false,
			showPorts: false,
		}
	}
	toggleInfo(){
		if(this.state.showInfo){
			this.setState({showInfo: false})
		} else {
			this.setState({showInfo: true})
		}
	}
	togglePortList(){
		if(this.state.showPorts){
			this.setState({showPorts: false})
		} else {
			this.setState({showPorts: true})
		}
	}
  render(){
    return (
    	<div className="past-cruise-card">
    		<h3 className="text-center individual-trip-title">
    			<Link to="/" className="back-button"><i className="fas fa-arrow-alt-circle-left"></i></Link>
    			{this.props.title}
    		</h3>
    		<div  className="small-12 columns">
	    		<p  className="text-center individual-trip-date">{this.props.day}</p>
	    		<p  className="text-center individual-trip-info">{this.props.cruiseLine} on {this.props.ship}</p>

	      	{this.props.ports.map((port, index) => {
	      		if(port.port === 'Sea Day'){
	      			return <SeaDayCard port={port.port} date={port.day} cardId={index} deleteDay={this.removeDayFromArray} key={index} />
	      		} else {
	      			return <PortCard port={port.port} day={port.date} cardId={index} deleteDay={this.removeDayFromArray} key={index} />
	      		}
	      	})}
	    	</div>
	    </div>
    );
  }
}

export default PastCruiseCard;