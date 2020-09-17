import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import * as ROUTES from "./constants/routes.constants";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <p>I will be the sign in page</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
