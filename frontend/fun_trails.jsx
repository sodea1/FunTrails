import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { fetchTrails, fetchTrail } from './actions/trail_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currUser) {
    const preloadedState = {
      entities: {
        users: { [window.currUser.id]: window.currUser }
      },
      session: { currUserId: window.currUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currUser;
  } else {
    store = configureStore();
  }
  // const store = configureStore();

  // testing 
  window.fetchTrails = fetchTrails;
  window.fetchTrail = fetchTrail;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
