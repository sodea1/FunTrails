import { RECEIVE_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      debugger;
      return action.errors.responseJSON;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return [];
  }
};

export default sessionErrorsReducer;