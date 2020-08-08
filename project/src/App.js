import React from 'react';
import { Route } from 'react-router-dom'
import Main from "./page/Main";
import Profile from "./page/Profile";
import Profile3 from "./component/Profile3";
import Login from "./component/Login";

function App() {
  return (
      <switch>
    <div>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/profile"  component={Profile} />
        <Route path="/profileportfolio" component={Profile3} />
        <Route path="/login" component={Login}    />
    </div>
      </switch>
  );
}

export default App;
