import React from "react";
import LandingPageText from "./components/LandingPageText";
import LandingPage from "./LandingPage/LandingPage";
import { MainMenu } from "./components/MainMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Master = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={MainMenu}></Route>
          <Route path="/LandingPage" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Master;
