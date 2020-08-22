import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { resolvers, typeDefs } from "./component/ClientState";

import ApolloClient from "apollo-client";
//import { ApolloClient } from "apollo-boost-upload";
import { ApolloProvider, ApolloLink } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:5000/",
  headers: {
    Authorization: `${localStorage.getItem("TOKEN")}`,
  },
  link: createUploadLink({ uri: "http://localhost:5000" }),
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    LoggedBool: localStorage.getItem("TOKEN") ? true : false,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
