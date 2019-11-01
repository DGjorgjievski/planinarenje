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

function Authentication(props) {
  return (
    <div>
      <Router>
        <Route path="/logIn" component={SignIn} exact></Route>
        <Switch>
          <Route path="/signUp" component={SignUp} exact></Route>
          <Route path="/main" component={MainPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Authentication;
