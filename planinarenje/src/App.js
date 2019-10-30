import React from "react";
import "./App.css";
<<<<<<< HEAD
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
=======
>>>>>>> master
import PlaninarskiKlubovi from "./PlaninarskiKlubovi/PlaninarskiKlubovi";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
<<<<<<< HEAD
=======
        <Route path="/MainPage" component={MainPage}></Route>
>>>>>>> a498082093b5abbe108c6bc5a5dd6917adc22595
        <Route path="/LandingPage" component={LandingPage}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route
          path="/PlaninarskiKlubovi"
          component={PlaninarskiKlubovi}
        ></Route>
      </div>
    </Router>
=======
    <div className="App">
      <PlaninarskiKlubovi></PlaninarskiKlubovi>
    </div>
>>>>>>> master
  );
}

export default App;
