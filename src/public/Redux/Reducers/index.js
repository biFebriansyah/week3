import { combineReducers } from 'redux'

import data from './User';

const Reducer = combineReducers(data)

const rootReducer = (state, action) => {

  return Reducer(state, action);

}

export default rootReducer;
