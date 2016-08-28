import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({ benches, requestBenches }) => (
  <div>
    <BenchIndex benches={ benches } requestBenches={ requestBenches }/>
    <BenchMap/>
  </div>
);

export default Search;
