import React from "react";
import NavContainer from "./nav/nav_container";
import SplashContainer from "./splash/splash_container"
import Footer from "./splash/footer";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import TrailContainer from "./trails/trail_container";

import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => ( 
  <div>    
    <NavContainer />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      {/* <Route path="/trails/:trailId" component={TrailContainer} /> */}
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    </Switch>

    <Footer />
  </div>
);

export default App;