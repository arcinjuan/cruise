import { createStore, applyMiddleware } from 'redux';
import { combineForms, createForms } from 'react-redux-form';

// this is the user state object, we can have many objects in seperate files. for now we keep it simple
const initialUserState = {
  firstName: '',
  lastName: ''
};

// In our store we put state objects. We set up our user state as the key {user} 
const store = createStore(combineForms({
  user: initialUserState,
}));

// check out other options in this tutorial at https://davidkpiano.github.io/react-redux-form/docs/guides/quickstart.html

export default store;