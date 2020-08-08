import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./component/GlobalStyles";
import Routes from "./component/Routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes LoggedBool={false} />
      </Router>
    </>
  );
}

export default App;
