import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bolsa from '../pages/Bolsa';
import Carteira from '../pages/Carteira';
import Conta from '../pages/Conta';
import Login from '../pages/Login';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/carteira" component={Carteira} />
      <Route path="/bolsa" component={Bolsa} />
      <Route path="/conta" component={Conta} />
    </Switch>
  );
}
