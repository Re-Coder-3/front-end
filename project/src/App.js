import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import GlobalStyles from "./component/GlobalStyles";
import Routes from "./component/Routes";

const QUERY = gql`
  {
    LoggedBool @client
  }
`;

function App() {
  const {
    data: { LoggedBool },
  } = useQuery(QUERY);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes LoggedBool={LoggedBool} />
      </Router>
    </>
  );
}

export default App;
