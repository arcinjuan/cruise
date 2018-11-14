import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.removeDayFromArray = this.removeDayFromArray.bind(this);
	}
  removeDayFromArray(day) {
		console.log(day)
	}

  render(){
  	let days = [
  		{
  			port: 'Singapore, Singapore',
  			date: '11/23/2018'
  		},
  		{
  			port: 'Singapore, Singapore',
  			date: '11/24/2018'
  		},
  		{
  			port: 'Penang, Malaysia',
  			date: '11/25/2018'
  		},
  		{
  			port: 'Langkawi, Malaysia',
  			date: '11/26/2018'
  		},
  		{
  			port: 'Phuket, Thailand',
  			date: '11/27/2018'
  		},
  		{
  			port: 'Sea Day',
  			date: '11/28/2018'
  		},
  		{
  			port: 'Singapore, Singapore',
  			date: '11/29/2018'
  		}
  	]

    return (
      <div className="row">
      	{days.map(function(day, index){
      		return <Card port={day.port} date={day.date} cardId={index} deleteDay={day => this.removeDayFromArray(day)} key={index} />
      	})}
      </div>
    );
  }
}

export default App;