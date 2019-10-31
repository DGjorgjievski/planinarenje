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
      <div className="App"></div>
    </Router>
  );
}

export default App;
