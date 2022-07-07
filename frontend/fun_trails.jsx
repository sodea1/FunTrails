import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { fetchTrails } from './actions/trail_actions';
import { fetchReview, updateReview } from './util/reviews_api_util';
import { fetchTrail } from './util/trails_api_util';
import { createReview, deleteReview, fetchTrailReviews } from './actions/review_actions';
import { postReviewCondition } from './util/review_condition_api_util';
import { updateReviewCondition } from './util/review_condition_api_util';
import { fetchPark } from './util/parks_api_util';
import ReactGA from 'react-ga';
import { fetchWeather } from './actions/weather_actions';

function initializeReactGA() {
  ReactGA.initialize('G-GPY7E97KHK');
  ReactGA.pageview('/homepage');
}

document.addEventListener("DOMContentLoaded", () => {
  initializeReactGA();
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
  // testing 
  window.fetchWeather = fetchWeather;
  window.fetchPark = fetchPark;
  window.deleteReview = deleteReview;
  window.updateReviewCondition = updateReviewCondition;
  window.updateReview = updateReview;
  window.postReviewCondition = postReviewCondition;
  window.fetchTrailReviews = fetchTrailReviews;
  window.createReview = createReview;
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
