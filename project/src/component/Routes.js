import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../page/Auth";
import Home from "../page/Home";

const LoggedOutPage = () => (
  <Switch>
    <Route path="/auth" component={Auth} />
    {/* <Route path="/extraAuth" component={ExtraAuth} /> */}
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInPage = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default ({ LoggedBool }) =>
  LoggedBool ? <LoggedInPage /> : <LoggedOutPage />;
