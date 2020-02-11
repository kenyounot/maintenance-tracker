import { combineReducers } from 'redux';
import userReducer from './userReducer';
import vehicleReducer from './vehicleReducer';
import maintenanceReducer from './maintenanceReducer';

export default combineReducers({ userReducer, vehicleReducer, maintenanceReducer });
