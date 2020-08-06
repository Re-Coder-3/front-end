import React from 'react';
import { Route } from 'react-router-dom'
import Main from "./page/Main";
import Profile from "./page/Profile";

function App() {
  return (
      <switch>
    <div>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/profile"  component={Profile} />
    </div>
      </switch>
  );
}

export default App;
