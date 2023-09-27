import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

// Create a function to load the state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined; // If there's no state in local storage, return undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; // If there's an error, return undefined
  }
};

// Create a function to save the state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Handle errors here
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers for other parts of your application here
});

// Load the initial state from local storage
const initialState = loadState();

const store = createStore(
  rootReducer,
  initialState, // Use the loaded state as the initial state
  applyMiddleware(thunk)
);

// Subscribe to store changes and save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
