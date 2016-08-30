import React from 'react';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component{
  componentDidMount() {
    // this.props.requestBenches();
  }

  render() {
    return (
      <ul>
        {
          Object.keys(this.props.benches).map( ben => (
           < BenchIndexItem key={this.props.benches[ben].id} bench={this.props.benches[ben]} />
        ))
      }
      </ul>
    );
  }

}

export default BenchIndex;
