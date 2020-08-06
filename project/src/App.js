import React from 'react';
import { Route } from 'react-router-dom'
import Main from "./page/Main";
import Profile from "./page/Profile";
import Profile3 from "./component/Profile3";

function App() {
  return (
      <switch>
    <div>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/profile"  component={Profile} />
        <Route path="/profileportfolio" component={Profile3} />
    </div>
      </switch>
  );
}

export default App;
