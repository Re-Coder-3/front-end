import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../page/Auth";
import Home from "../page/Home";
import Main from "../page/Main";
import Search from "../page/Search";
import Header from "./Header";
import Profile from "../page/Profile";
import MyPage from "../page/MyPage";
import Header1 from "./Header1";

const LoggedOutPage = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile} />
      <Route path="/mypage" component={MyPage} /> {/* 시험용 */}
      {/* <Route path="/extraAuth" component={ExtraAuth} /> */}
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

const LoggedInPage = () => (
  <>
    <Header1 />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
      <Route path="/mypage" component={MyPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

export default ({ LoggedBool }) =>
  LoggedBool ? <LoggedInPage /> : <LoggedOutPage />;
