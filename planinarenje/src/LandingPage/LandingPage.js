import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import React from "react";
import LandingPageMenu from "../components/LandingPageMenu";
import LandingPageText from "../components/LandingPageText";
import Background from "../SLIKI/plan2.jpg";
import Header from "../Header/Header";
import { MainMenu } from "../components";
import MainPage from "../MainPage/MainPage";
import Authentication from "../Authentication/Authentication";
import PlaninarskiKlubovi from "../PlaninarskiKlubovi/PlaninarskiKlubovi";
import NastaniCards from "../NastaniCards/NastaniCards";
import Footer from "../components/Footer";
import Nastani from "../Nastani/Nastani";

const slikaStyle = {
  backgroundImage: `url(${Background})`,
  width: "100%",
  height: "100vh",
  backgroundSize: "cover"
};

function LandingPage() {
  return (
    <Router>
      <Route path="/" exact>
        <div style={slikaStyle}>
          <LandingPageMenu></LandingPageMenu>
          <LandingPageText></LandingPageText>
        </div>
      </Route>
      <Route path="/main" component={MainPage} exact>
        <MainPage></MainPage>
      </Route>
      <Route path="/login" component={Authentication}>
        <Authentication></Authentication>
      </Route>
      <Route path="/pKlubovi" component={PlaninarskiKlubovi}>
        <PlaninarskiKlubovi></PlaninarskiKlubovi>
      </Route>
      <Route path="/nastani" component={NastaniCards}>
        <NastaniCards></NastaniCards>
      </Route>

      <Route path="/infoNastan/:id" component={Nastani}>
        <Header></Header>
        <Nastani></Nastani>
        <Footer></Footer>
      </Route>
    </Router>
  );
}

export default LandingPage;
