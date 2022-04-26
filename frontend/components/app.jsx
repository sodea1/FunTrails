import React from "react";
import NavContainer from "./nav/nav_container";
import Splash from "./splash/splash";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>

    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={Splash} />

    {/* <footer>
      <Footer />
    </footer> */}
  </div>
);

export default App;