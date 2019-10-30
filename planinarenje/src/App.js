<<<<<<< HEAD
import React from "react";
import "./App.css";
import SignUp from "./Authentication/SignUp/SignUp";
import SignIn from "./Authentication/SignIn/SignIn";
import LandingPage from "./LandingPage/LandingPage";
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
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
      </div>
    </Router>
=======
import React from 'react';
import './App.css';


import SignUp from './Authentication/SignUp/SignUp';
import Button from '@material-ui/core/Button';
import LandingPage from './LandingPage/LandingPage'



function App() {
  return (
    <div className="App">       

    </div>
>>>>>>> 54be4507b372ebc5c6d8fc94c6f50b0f608a3f31
  );
}

export default App;
