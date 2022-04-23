import { RECEIVE_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return [];
  }
};

export default sessionErrorsReducer;