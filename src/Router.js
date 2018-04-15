import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Gnome from './screens/Gnome';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/gnome/:id" component={Gnome} />
      <Route component={Home} />
    </div>
  </BrowserRouter>
);

export default Router;
