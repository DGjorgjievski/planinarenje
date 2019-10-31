import React from "react";
import "./App.css";
import MainPage from './MainPage/MainPage';
import LandingPage from './LandingPage/LandingPage'
import Nastani from './Nastani/Nastani'
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
        <Nastani />
      </div>
    </Router>
  );
}

export default App;
