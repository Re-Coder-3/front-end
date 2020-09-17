import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../page/Auth";
import Home from "../page/Home";
import Main from "../page/Main";
import Search from "../page/Search";
import Header from "./Header";
import Footer from "./Footer";
import MyPage from "../page/MyPage";

/** 임시용  */
import Profile1 from "../component/Profile1";
import Profile2 from "../component/Profile2";
import Profile3 from "../component/Profile3";

const LoggedOutPage = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/auth" component={Auth} />
      <Route path="/search" component={Search} />

      {/* 임시용 */}
      <Route path="/profile1" component={Profile1} />
      <Route path="/profile2" component={Profile2} />
      <Route path="/profile3" component={Profile3} />
      <Route path="/mypage" component={MyPage} />

      {/* <Route path="/extraAuth" component={ExtraAuth} /> */}
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </>
);

const LoggedInPage = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
      <Route path="/search/:searchText" component={Search} />
      <Route path="/mypage" component={MyPage} />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </>
);

export default ({ LoggedBool }) =>
  LoggedBool ? <LoggedInPage /> : <LoggedOutPage />;
