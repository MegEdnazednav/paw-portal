import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Animals from './Animals';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Animals }></Route>
      <Route path="/view/:animalId" component={ App }></Route>
      <Route component = { NotFound }></Route>
    </Switch>
  </BrowserRouter>
)

export default Router;
