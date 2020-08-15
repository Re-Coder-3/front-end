import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ClientState from "./component/ClientState";

import ApolloClient from "apollo-boost";
// import { ApolloClient } from "apollo-boost-upload";
import { ApolloProvider, ApolloLink } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  uri: "http://localhost:5000/",
  clientState: ClientState,
  headers: {
    Authorization: `${localStorage.getItem("TOKEN")}`,
  },
  link: ApolloLink.split([createUploadLink({ uri: "http://localhost:5000" })]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
