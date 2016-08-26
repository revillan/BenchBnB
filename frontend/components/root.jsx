import React from 'react';
import BenchIndexContainer from './bench_index_container';
import { Provider } from 'react-redux';

export const Root = ({ store }) => (
  <Provider store={store}>
    <BenchIndexContainer/>
  </Provider>
);
