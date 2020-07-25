import React from 'react';
import { Route } from 'react-router-dom'
import Main from "./page/Main";

function App() {
  return (
    <div>
        <Route path="/" component={Main}/>
    </div>
  );
}

export default App;
