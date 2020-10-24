import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppRoute from './Hoc';
import Main from 'layouts/Main';

import Home from 'pages/Main/main';
import Summery from 'pages/Sammery/summery';
import Auth from 'pages/Auth/auth';
import Registration from 'pages/Registration';
import Search from 'pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path="/" component={Home} layout={Main} exact />
        <AppRoute path="/auth" component={Auth} exact />
        <AppRoute path="/registration/:type" component={Registration} exact />
        <AppRoute path="/summery" component={Summery} layout={Main} exact />
        <AppRoute path="/search/:type" component={Search} layout={Main} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
