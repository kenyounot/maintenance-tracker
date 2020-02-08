import { combineReducers } from 'redux';
import userReducer from './userReducer';
import vehicleReducer from './vehicleReducer';

export default combineReducers({ userReducer, vehicleReducer });
