import React from 'react';
import { Route } from 'react-router-dom'
import Main from "./page/Main";
import Profile from "./page/Profile";

function App() {
  return (
    <div>
        <Route path="/" component={Main}/>
        <Route path="/profile"  component={Profile} />
    </div>
  );
}

export default App;
