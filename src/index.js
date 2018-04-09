import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import Router from './Router';
import store from './store';
import client from './apolloClient';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
