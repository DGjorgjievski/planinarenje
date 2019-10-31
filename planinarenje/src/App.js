import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import LandingPage from "./LandingPage/LandingPage";
import Nastani from "./Nastani/Nastani";
import PlaninarskiKlubovi from "./PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "./NastaniCards/NastaniCards";
import Authentication from "./Authentication/Authentication";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
<<<<<<< HEAD

import FullPage from "./FullPageLayout";

function App() {
  return <div></div>;
=======
import Authentication from "./Authentication/Authentication";
import NastanInfo from "./components/NastanInfo";
import Footer from "./components/Footer";

function App() {
  return (

      <div className="App">

      </div>
  );
>>>>>>> d696f699f0732fe1bbed2ce751d28af14885ac34
}

export default App;
