import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.splitDaysArray = this.splitDaysArray.bind(this);
	}
  splitDaysArray(day) {
		console.log(day)
	}

  render(){
  	let days = [
  		{
  			port: 'Singapore',
  			date: '11/23/2018'
  		},
  		{
  			port: 'Singapore',
  			date: '11/24/2018'
  		},
  		{
  			port: 'Penang',
  			date: '11/25/2018'
  		}
  	]

    return (
      <div className="row">
      	{days.map(function(day, index){
      		return <Card port={day.port} date={day.date} cardId={index} deleteDay={day => this.splitDaysArray(day)} key={index} />
      	})}
      </div>
    );
  }
}

export default App;
