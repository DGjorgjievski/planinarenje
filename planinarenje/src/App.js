import React from "react";
import "./App.css";
import MainPage from './MainPage/MainPage';
import LandingPage from './LandingPage/LandingPage';
import Nastani from './Nastani/Nastani';
import PlaninarskiKlubovi from './PlaninarskiKlubovi/PlaninarskiKlubovi';
import NastaniCards from './NastaniCards/NastaniCards';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
       
      </div>
    </Router>
  );
}

export default App;
