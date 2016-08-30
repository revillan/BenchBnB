import React from 'react';
import SearchContainer from './search_container';
import { Provider } from 'react-redux';
import AppRouter from './router';

export const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
