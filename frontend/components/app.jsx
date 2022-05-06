import React from "react";
import NavContainer from "./nav/nav_container";
import SplashContainer from "./splash/splash_container"
import Footer from "./splash/footer";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import TrailContainer from "./trails/trail_container";
import Modal from './modal/modal';

import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => ( 
  <div id="container">
    <Modal />
    <NavContainer />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/trails/:id" component={TrailContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>

    <Footer />
  </div>
);

export default App;