import React from "react";
import Nav from "./nav/nav";
import Splash from "./splash/splash"
import Footer from "./splash/footer";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import TrailContainer from "./trails/trail_container";
import Modal from './modal/modal';
import ParkContainer from "./parks/park_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => ( 
  <div id="container">
    <Modal />
    <Nav />
    <div className="margintop">
      <Switch>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/trails/:id" component={TrailContainer} />
        <Route path="/parks/:id" component={ParkContainer} />
        <Route path="/" component={Splash} />
      </Switch>
    </div>

    <Footer />
  </div>
);

export default App;