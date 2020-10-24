import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from 'pages/Main/main';
import Auth from 'pages/Auth/auth';
import Registration from 'pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/auth" component={Auth} exact />
      <Route path="/registration/:type" component={Registration} exact />
    </BrowserRouter>
  );
}
export default App;
