import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store, { history } from '../store'

import App from './App';
import NewAnimal from './NewAnimal';
import AnimalDetails from './AnimalDetails';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/animals/new" exact component={NewAnimal} />
        <Route path="/animals/:animalId" component={AnimalDetails} />
      </Switch>
    </Router>
  </Provider>
)

export default router;
