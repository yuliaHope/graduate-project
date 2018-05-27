import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect, Switch } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store, history } from './store';
import ProjectsList from './projects-list';
import Header from './header';
import ProjectInfo from './project-info/project-info.container';
import NewProgect from './new-project/new-project';
import Statistics from './statistics/statistics-component';
import './App.css';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/projects" />
            <Route exact path="/projects" component={ProjectsList} />
            <Route exact path="/projects/:id" component={ProjectInfo} />

            <Route path="/new" component={NewProgect} />
            <Route path="/statistics" component={Statistics} />
            <Route path="*" render={() => <div>Page not found</div>} />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
