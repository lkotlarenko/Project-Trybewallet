import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
  </Switch>
);

export default Routes;
