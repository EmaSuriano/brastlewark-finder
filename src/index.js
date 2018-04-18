import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Gnome from './screens/Gnome';
import store from './store';
import client from './apolloClient';
import registerServiceWorker from './registerServiceWorker';
import theme from './shared/constants/theme';
import { AppContainer } from './shared/components';
import './normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContainer>
            <Route path="/gnome/:id" component={Gnome} />
            <Route component={Home} />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
