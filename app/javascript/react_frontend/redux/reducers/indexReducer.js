import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { animals } from './animalsReducer';
import { animal } from './animalReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
  { animals,
    animal,
    form: formReducer,
    routing: routerReducer });

export default rootReducer;
