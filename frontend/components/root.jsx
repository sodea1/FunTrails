import React from "react";
import { Provider } from "react-redux";
import App from './app';
import { HashRouter } from "react-router-dom";
import { createBrowerHistory } from 'history';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>
);

export default Root;