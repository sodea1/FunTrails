import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import trailsReducer from './trails_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  trails: trailsReducer
});

export default entitiesReducer;