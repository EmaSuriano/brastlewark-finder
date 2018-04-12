import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import Router from './Router';
import store from './store';
import client from './apolloClient';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import theme from './shared/constants/theme';
import { AppContainer } from './shared/components';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Router />
        </AppContainer>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
