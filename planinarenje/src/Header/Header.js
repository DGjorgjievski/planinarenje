import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import { TopMenu, MainCarousel, MainMenu } from "../components";

import CardsContainer from "../components/CardsContainer";

import Authentication from "../Authentication/Authentication";
import PlaninarskiKlubovi from "../PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "../NastaniCards/NastaniCards";
import MainPage from "../MainPage/MainPage";
import Footer from "../components/Footer";

function Header() {
  return (
    <section className="header-section">
      <MainMenu />
    </section>
  );
}

export default Header;
