import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { animals } from './animalsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
  { animals,
    form: formReducer,
    routing: routerReducer });

export default rootReducer;
