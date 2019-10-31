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
import NastanInfo from "./components/NastanInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nastani></Nastani>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
