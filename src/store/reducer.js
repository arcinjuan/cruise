import savedCruises from './savedCruises';

const initialState = {
	// sample whileI build
	newCruiseData: {
		cruiseLine: "Royal Caribbean International",
		id: "Juan-And-Mirna-Go-To-Asia",
		ports: [],
		setSail: "12/24/2018",
		ship: "Voyager Of The Seas",
		tripName: "Juan And Mirna Go To Asia",
		startDay:["12", "24", "2018"],
		cruiseDay: 24,
		startTime:{
			hour:"9",
			min:"00",
			ampm:"am",
			fullTime:"9:00 am"
		},
		endTime:{
			hour:"10",
			min:"00",
			ampm:"pm",
			fullTime:"10:00 pm"
		},
		schedule:'test',
		portSegment: 'portDay'
	},
	activeCruise: null,
	pastTrips: savedCruises(),
	createTrip: {
		isFirstStep: true
	}

}

const reducer = (state = initialState, action) => {

	if(action.type === 'CREATE_NEW_TRIP'){
		return {
			...state,
			newCruiseData: action.payload
		}
	}

	if(action.type === 'SAVE_NEW_PORT'){
		console.log(...state.newCruiseData.ports)
		console.log(action.payload)
		
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				ports: [ ...state.newCruiseData.ports, action.payload ]
			}
		}
	} 

	if(action.type === 'SET_TIME_MESSAGE'){
		
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				portSegment: action.payload
			}
		}
	}  

	if(action.type === 'SAVE_NEW_TRIP'){
		return {
			...state,
			pastTrips: {
				cruises: [state.newCruiseData, ...state.pastTrips.cruises, ]
			}
		}
	} 

	if(action.type === 'UPDATE_HOUR_A'){
		const min = state.newCruiseData.startTime.min
		const ampm = state.newCruiseData.startTime.ampm
		const newTime =  action.payload + ':' + min + ' ' + ampm
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				startTime: {
					...state.newCruiseData.startTime,
					hour: action.payload,
					fullTime: newTime
				}
			}
		}
	}

	if(action.type === 'UPDATE_MIN_A'){
		const hour = state.newCruiseData.startTime.hour
		const ampm = state.newCruiseData.startTime.ampm
		const newTime =  hour + ':' + action.payload + ' ' + ampm
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				startTime: {
					...state.newCruiseData.startTime,
					min: action.payload,
					fullTime: newTime
				}
			}
		}
	}

	if(action.type === 'UPDATE_AMPM_A'){
		const min = state.newCruiseData.startTime.min
		const hour = state.newCruiseData.startTime.hour
		const newTime = hour + ':' + min + ' ' + action.payload
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				startTime: {
					...state.newCruiseData.startTime,
					ampm: action.payload,
					fullTime: newTime
				}
			}
		}
	}

		if(action.type === 'UPDATE_HOUR_B'){
		const min = state.newCruiseData.endTime.min
		const ampm = state.newCruiseData.endTime.ampm
		const newTime = action.payload + ':' + min + ' ' + ampm
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				endTime: {
					...state.newCruiseData.endTime,
					hour: action.payload,
					fullTime: newTime
				}
			}
		}
	}

	if(action.type === 'UPDATE_MIN_B'){
		const hour = state.newCruiseData.endTime.hour
		const ampm = state.newCruiseData.endTime.ampm
		const newTime = hour + ':' + action.payload + ' ' + ampm
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				endTime: {
					...state.newCruiseData.endTime,
					min: action.payload,
					fullTime: newTime
				}
			}
		}
	}

	if(action.type === 'UPDATE_AMPM_B'){
		const min = state.newCruiseData.endTime.min
		const hour = state.newCruiseData.endTime.hour
		const newTime = hour + ':' + min + ' ' + action.payload
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				endTime: {
					...state.newCruiseData.endTime,
					ampm: action.payload,
					fullTime: newTime
				}
			}
		}
	}

	if(action.type === 'SET_ACTIVE_CRUISE'){
		let cruiseId = action.payload;
		let activeCruise = state.pastTrips.cruises.find(cruise => cruise.id === cruiseId);
		return {
			...state,
			activeCruise: activeCruise
		}
	} 

	if(action.type === 'SET_STEP_PROGRESS'){
		return {
			...state,
			createTrip: {
				isFirstStep: action.payload
			}
		}
	} 

	if(action.type === 'UPDATE_DAY'){
		let day = ++state.newCruiseData.cruiseDay
		return {
			...state,
			newCruiseData: {
				...state.newCruiseData,
				cruiseDay: day
			}
		}
	}
  return state;
};


export default reducer;
