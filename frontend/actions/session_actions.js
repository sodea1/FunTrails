import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currUser => ({
  type: RECEIVE_CURRENT_USER,
  currUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then((data) => {
      dispatch(receiveCurrentUser(data));
    }, errors => {
      dispatch(receiveErrors(errors));
    });
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => {
      dispatch(logoutCurrentUser());
    }, errors => {
      dispatch(receiveErrors(errors));
    });
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then((data) => {
      dispatch(receiveCurrentUser(data));
    }, errors => {
      dispatch(receiveErrors(errors));
    });
};