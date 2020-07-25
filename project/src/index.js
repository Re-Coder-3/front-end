import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCashe } from 'apollo-cashe-inmemory'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCashe()
});

ReactDOM.render(
    <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
