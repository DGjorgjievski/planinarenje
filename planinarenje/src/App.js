import React from "react";
import "./App.css";
import SignUp from "./Authentication/SignUp/SignUp";
import SignIn from "./Authentication/SignIn/SignIn";
import LandingPage from "./LandingPage/LandingPage";
import MainPage from "./MainPage/MainPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PlaninarskiKlubovi from "./PlaninarskiKlubovi/PlaninarskiKlubovi";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/MainPage" component={MainPage}></Route>
        <Route path="/LandingPage" component={LandingPage}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route
          path="/PlaninarskiKlubovi"
          component={PlaninarskiKlubovi}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
