import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk'

import rootReducer from './redux/reducers/indexReducer';

// needed to make dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose

const historyCreate = createBrowserHistory()

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   )
);

const history = syncHistoryWithStore(historyCreate, store)

export default store
export { history }
