import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import LandingPage from "./LandingPage/LandingPage";
import Nastani from "./Nastani/Nastani";
import PlaninarskiKlubovi from "./PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "./NastaniCards/NastaniCards";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Authentication from "./Authentication/Authentication";

function App() {
  return (
    <Router>
      <Route></Route>
      <Route path="/LandingPage" component={LandingPage}></Route>
      <Route path="/MainPage" component={MainPage}></Route>
      <Route path="/Nastani" component={Nastani}></Route>
      <Route path="/Authentication" component={Authentication}></Route>
      <Route path="/NastaniCards" component={NastaniCards}></Route>
      <Route path="/PlaninarskiKlubovi" component={PlaninarskiKlubovi}></Route>
    </Router>
  );
}

export default App;
