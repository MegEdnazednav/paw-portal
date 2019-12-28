import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../store'

import App from './App';
import AnimalDetails from './AnimalDetails';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route exact path="/" component={ App }></Route>
      <Route path="/animals/:animalId" component={ AnimalDetails }></Route>
    </Router>
  </Provider>
)

export default router;
