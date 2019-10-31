import React from "react";
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
import Header from "./Header/Header";

export function FullPage() {
  return (
    <div>
      <Header />
      <div className={"container"}>
        <Switch>
          <Route path="/main" component={MainPage} exact></Route>
          <Route path="/login" component={Authentication} exact></Route>
        </Switch>
      </div>
    </div>
  );
}

export default FullPage;
