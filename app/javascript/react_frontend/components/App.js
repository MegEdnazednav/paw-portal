import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store, { history } from '../store';

import Navbar from './Navbar'
import Landing from './Landing';
import AnimalList from './AnimalList';
import NewAnimal from './NewAnimal';
import AnimalDetails from './AnimalDetails';

import './App.scss'

const App = (
  <Provider store={store}>
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/animals/new" exact component={NewAnimal} />
        <Route path="/animals/:animalId" component={AnimalDetails} />
        <Route path="/animals" component={AnimalList} />
      </Switch>
    </Router>
  </Provider>
)

export default App;
