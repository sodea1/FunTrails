import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // testing 
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
