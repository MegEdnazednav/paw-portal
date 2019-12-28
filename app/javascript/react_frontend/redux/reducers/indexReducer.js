import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { animals } from './animalsReducer';

const rootReducer = combineReducers({ animals, routing: routerReducer });

export default rootReducer;
