import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import { projectsReducer } from '../projects-list/reducer';

console.log('projectsReducer', projectsReducer);

export const history = createHistory();
const router = routerMiddleware(history);

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable no-underscore-dangle */

export const store = createStore(
  combineReducers({
    router: routerReducer,
    projects: projectsReducer,
  }),
  composeEnhancers(applyMiddleware(router, thunk)),
);
