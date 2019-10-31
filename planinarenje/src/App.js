import React from "react";
import "./App.css";
import MainPage from './MainPage/MainPage';
import LandingPage from './LandingPage/LandingPage'
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
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
