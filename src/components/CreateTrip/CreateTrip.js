import React from 'react';
import DatePicker from '../FormFields/DatePicker';
import ShipsSelect from '../FormFields/ShipsSelectField';
import { Redirect } from "react-router";
import { connect } from 'react-redux';

let redirect;
class createTrip extends React.Component {

  render() {
    const { tripName, cruiseLine, ship, setSail } = this.state;
    const isEnabled = tripName.length > 0 &&
                      cruiseLine.length > 0 &&
                      ship.length > 0 &&
                      setSail.length > 0;
    if(redirect){
      // when we submit redirect is set to true and redirects to the second step
      return <Redirect to="/new-trip/step-two/start-trip" />
    } else {
      // otherwise redirect is set to false and loads the first form
      return (
        <div className="create-trip-form">
          <form onSubmit={this.handleSubmit} >
            <div className="field">
              <input name="tripName" placeholder="What are you calling this trip?" type="text" value={this.state.tripName} onChange={this.handleInputChange} />
            </div>
            <div className="field">
              <DatePicker grabDate={(day) => this.handleDatePicker(day)}/>
            </div>
            <ShipsSelect passData={(cruiseline, cruiseship) => this.handleSelectData(cruiseline, cruiseship)} />
            <div className="text-center">
              <input type="submit" disabled={!isEnabled} value="Add Ports"/>
            </div>
          </form>        
        </div>
      );
    }
  }


  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDatePicker = this.handleDatePicker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      tripName: "",
      id: "",
      cruiseLine: "",
      ship: "",
      setSail: "",
      startDay: null,
      ports: [],
      cruiseDay: null,
      startTime:{
        hour:"9",
        min:"00",
        ampm:"am",
        fullTime:"9:00 am"
      },
      endTime:{
        hour:"9",
        min:"00",
        ampm:"am",
        fullTime:"9:00 am"
      },
      finalTime:''
     }
  }
  
  // set step progress to first step each time this step loads
  componentWillMount(){
    redirect = false
    if(window.location.href.indexOf('step-one') > -1) {
      this.props.setStepProgress()
    }
  }

  // when input changes
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // generate an ID by making a kabob case version of the trip name
    if(name === 'tripName'){
      let safeUrl = value.split(/[_\s]/).join("-")
      let modifiedName = value.toLowerCase()
                              .split(' ')
                              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                              .join(' ');
      this.setState({
          tripName: modifiedName,
          id: safeUrl
      });
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  // when date picker changes
  handleDatePicker(date){
    let selectedDate = date.toLocaleDateString();
    let singleDay = selectedDate.split('/');
    this.setState({startDay: singleDay});
    this.setState({setSail: selectedDate});
    this.setState({cruiseDay: singleDay[1]})
  }

  // grab data from select fields
  handleSelectData(cruiseline, cruiseship) {
    this.setState({cruiseLine: cruiseline, ship: cruiseship })
  }

  // when you submit
  handleSubmit(e) {
    e.preventDefault();

    this.props.createTrip(this.state)
    redirect = true;
    this.forceUpdate()
  }
}


const mapStateToProps = state => {
	return{
		cruise: state.pastTrips.cruises
	}
}

const mapDispatchToProps = dispatch => {
	return{
    createTrip: (value) => dispatch({type: 'CREATE_NEW_TRIP', payload: value}),
    setStepProgress: () => dispatch({type: 'SET_STEP_PROGRESS', payload: true})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(createTrip);

     