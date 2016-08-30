import React from 'react';
import { Router } from 'react-router';
import { Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SearchContainer from './search_container';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ SearchContainer } />
    </Route>
  </Router>
);

export default AppRouter;
