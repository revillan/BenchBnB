import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({ benches, requestBenches, updateBounds }) => (
  <div>
    <BenchIndex benches={ benches } requestBenches={ requestBenches }/>
    <BenchMap benches={ benches } updateBounds={ updateBounds }/>
  </div>
);

export default Search;
