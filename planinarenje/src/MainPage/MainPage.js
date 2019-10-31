import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { MainCarousel } from "../components/MainCarousel";
import CardsContainer from "../components/CardsContainer";
import Header from "../Header/Header";
import Authentication from "../Authentication/Authentication";
import PlaninarskiKlubovi from "../PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "../NastaniCards/NastaniCards";
import { MainMenu } from "../components";

function MainPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/main" exact>
            <Header></Header>
            <MainCarousel />
            <CardsContainer />
          </Route>
          <Route path="/logIn" component={Authentication}>
            <Authentication></Authentication>
          </Route>
          <div>
            <MainMenu></MainMenu>
            <Route path="/pKlubovi" component={PlaninarskiKlubovi}>
              <PlaninarskiKlubovi></PlaninarskiKlubovi>
            </Route>
            <Route path="/nastani" component={NastaniCards}>
              <NastaniCards></NastaniCards>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default MainPage;
