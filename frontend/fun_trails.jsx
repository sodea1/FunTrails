import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { fetchTrails } from './actions/trail_actions';
import { fetchReview } from './util/reviews_api_util';
import { fetchTrail } from './util/trails_api_util';



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
  window.fetchReview = fetchReview;
  window.fetchTrails = fetchTrails;
  // window.fetchTrail = fetchTrail;
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
