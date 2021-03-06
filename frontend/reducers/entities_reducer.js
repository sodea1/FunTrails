import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import trailsReducer from './trails_reducer';
import reviewsReducer from './reviews_reducer';
import parksReducer from './parks_reducer';
import weatherReducer from './weather_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  parks: parksReducer,
  trails: trailsReducer,
  reviews: reviewsReducer,
  weather: weatherReducer
});

export default entitiesReducer;