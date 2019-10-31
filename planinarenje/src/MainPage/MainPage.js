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

import { MainCarousel } from "../components/MainCarousel";
import CardsContainer from "../components/CardsContainer";
import Header from "../Header/Header";
import Authentication from "../Authentication/Authentication";
import PlaninarskiKlubovi from "../PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "../NastaniCards/NastaniCards";
import { MainMenu } from "../components";
import Footer from "../components/Footer";
import Nastani from "../Nastani/Nastani";

function MainPage() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/main" component={MainPage} exact>
            <MainCarousel />
            <CardsContainer />
          </Route>
          <Route path="/pKlubovi" component={PlaninarskiKlubovi}>
            <PlaninarskiKlubovi></PlaninarskiKlubovi>
          </Route>
          <Route exact path="/nastani" component={NastaniCards}>
            <NastaniCards></NastaniCards>
          </Route>
          <Route path="/infoNastan" component={Nastani}>
            <Nastani></Nastani>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
