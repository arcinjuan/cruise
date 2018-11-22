import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';
// import NewCruiseData from './newCruiseData';

const testData = {
	counter: 0
}

const NewCruiseData = {
  tripName: '',
  url: '',
  setSail:''
}

const initialState = {

  newTripForm: NewCruiseData,
  sampleData: testData
}

const reducer = (state = initialState, action) => {
	// cant add function here :(


	return state
}

// In our store we put state objects. We set up our user state as the key {user} 
const store = createStore(combineForms(reducer()));


export default store;

// Other method 

 	// IN REDUCER.JS

	 			// const initialState = {
				//     counter: 0
				// }

				// const reducer = (state = initialState, action) => {
				//     if (action.type === 'INCREMENT') {
				//         return {
				//             counter: state.counter + 1
				//         }
				//     }
				//     return state;
				// };

				// export default reducer;

	// IN INDEX.JS
				// const store = createStore(reducer);
