import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const Routes = () => (
  <Switch>
    <Route exact path="/carteira" component={ Wallet } />
    <Route exact path="/" component={ Login } />
  </Switch>
);

export default Routes;
