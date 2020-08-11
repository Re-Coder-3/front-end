import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../page/Auth";
import Home from "../page/Home";
import Main from "../page/Main";
import Search from "../page/Search";

const LoggedOutPage = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/auth" component={Auth} />
    <Route path="/search" component={Search} />
    {/* <Route path="/extraAuth" component={ExtraAuth} /> */}
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInPage = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default ({ LoggedBool }) =>
  LoggedBool ? <LoggedInPage /> : <LoggedOutPage />;
