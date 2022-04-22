import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, (applyMiddleware(thunk, logger)));
};

export default configureStore;