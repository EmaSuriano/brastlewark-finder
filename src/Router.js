import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Gnome from './screens/Gnome';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gnome/:id" component={Gnome} />
    </Switch>
  </BrowserRouter>
);

export default Router;
