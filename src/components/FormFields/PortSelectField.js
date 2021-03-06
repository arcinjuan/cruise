import React, { Component } from 'react';
import Ports from '../../json/listOfPorts';
import Select from 'react-select';

const options = [];
for (var i in Ports.ports){
	options.push({value: Ports.ports[i], label: Ports.ports[i]})

}

export default class PortList extends Component {
  constructor(props) {
    super(props);
    this.handlePortChange = this.handlePortChange.bind(this);

    this.state = {
    	selectedOption: null,
    }

  }
  handlePortChange(selectedOption) {
  	this.setState({ selectedOption });
    let activity = this.props.grabPort(selectedOption.value)
    return activity
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handlePortChange}
        options={options}
        className="Selection"
        classNamePrefix="select-field"
        placeholder="Enter Port"
      />
    );
  }
}

