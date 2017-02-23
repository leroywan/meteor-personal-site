import { toggle } from './toggle.js';
import chooseContactMethod from './chooseContactMethod.js';
import { createStore, combineReducers } from 'redux';


const reducers = combineReducers({
  chooseContactMethod,
  toggle
})

const store = createStore(reducers);
export default store;