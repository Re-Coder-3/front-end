import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { InMemoryCache } from "@apollo/client";
import ClientState, { defaults, resolvers } from "./component/ClientState";

const client = new ApolloClient({
  uri: "http://localhost:5000/",
  clientState: ClientState,
  headers: {
    Authorization: `${localStorage.getItem("TOKEN")}`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
