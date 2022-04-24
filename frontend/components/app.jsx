import React from "react";
import NavContainer from "./nav/nav_container";
import SplashContainer from "./splash/splash_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashContainer} />

  </div>
);

export default App;