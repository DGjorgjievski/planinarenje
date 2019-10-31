import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import LandingPage from "./LandingPage/LandingPage";
import Nastani from "./Nastani/Nastani";
import PlaninarskiKlubovi from "./PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "./NastaniCards/NastaniCards";
import Authentication from "./Authentication/Authentication";
import Master from "./Master";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import LandingPageMenu from "./components/LandingPageMenu";

function App() {
  return (
    <div>
      <Router>
        <LandingPage></LandingPage>
      </Router>
    </div>
  );
}

export default App;
