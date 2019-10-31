import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import "../Styles/Authentication.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function Authentication() {
  return (
    <div>
      <Router>
        <Route path="/logIn" component={SignIn}></Route>
        <Route path="/signUp" component={SignUp}></Route>
        <Route path="/main" component={MainPage}></Route>
      </Router>
    </div>
  );
}

export default Authentication;
