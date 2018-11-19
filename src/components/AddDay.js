import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../css/tabs.css";
import AddSeaDayForm from './AddSeaDayForm';
import AddPortForm from './AddPortForm';
import PortCard from './PortCard';
import SeaDayCard from './SeaDayCard';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from "react-router-dom";

class AddDay extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeDayFromArray = this.removeDayFromArray.bind(this);
    this.state = {
      days: [],
    }
  }
  componentDidUpdate(){
    return scrollToComponent(this.bottomForm);
  }
  render() {
    return (
      <div>
        <div className="card-builder">
          {this.state.days.map((day, index) => {
            if(day.port === 'Sea Day'){
              return <SeaDayCard port={day.port} day={day.date} schedule={day.schedule} cardId={index} deleteDay={this.removeDayFromArray} key={index} />
            } else {
              console.log('made it')
              return <PortCard port={day.port} day={day.date} schedule={day.schedule} cardId={index} deleteDay={this.removeDayFromArray} key={index} />
            }
          })}
        </div>
        <Tabs>
          <TabList>
            <Tab>Add Port</Tab>
            <Tab>Add Sea Day</Tab>
            <Tab><i className="fas fa-save"></i></Tab>
            <Tab><i className="fas fa-home"></i></Tab>
          </TabList>
          <TabPanel>
            <AddPortForm addDay={this.addCard}/>
          </TabPanel>
          <TabPanel>
            <AddSeaDayForm addDay={this.addCard}/>
          </TabPanel>
          <TabPanel>
            <p>Save</p>
          </TabPanel>
          <TabPanel>
            <div className="small-12 columns cancelAddDay text-center">
              <Link to="/">Confirm Cancel and Return Home</Link> <br />(all changes will be lost!)
            </div>
          </TabPanel>
        </Tabs>
        <section ref={(section) => { this.bottomForm = section; }}></section>
      </div>
    );
  }


  addCard(port, date, schedule){
    let pushNewDay = [...this.state.days];
    pushNewDay.push({port: port, date: date, schedule: schedule});
    this.setState({days: pushNewDay});
  }
  removeDayFromArray(day) {
    let updatedArray = [...this.state.days];
    updatedArray.splice(day, 1);
    this.setState({days: updatedArray});
  }  
}

export default AddDay;
