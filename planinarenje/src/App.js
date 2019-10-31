import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import LandingPage from "./LandingPage/LandingPage";
import Nastani from "./Nastani/Nastani";
import PlaninarskiKlubovi from "./PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "./NastaniCards/NastaniCards";
import Authentication from "./Authentication/Authentication";
import Dashboard from './Dashboard/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import FullPage from "./FullPageLayout";

function App() {
  return (
      <div>
        <Dashboard />
      </div>
    )
}

export default App;
