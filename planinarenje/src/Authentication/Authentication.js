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
        <Switch>
          <Route path="/login" component={SignIn} exact></Route>
          <Route path="/signUp" component={SignUp} exact></Route>
          <Route path="/main" component={MainPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Authentication;
