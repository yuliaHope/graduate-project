import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import { projectsReducer } from '../projects-list/reducer';
import { newProjectReducer } from '../new-project/reducer';
import { infoReducer } from '../project-info/reducer';

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
    newProject: newProjectReducer,
    info: infoReducer,
  }),
  composeEnhancers(applyMiddleware(router, thunk)),
);
