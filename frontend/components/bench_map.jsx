import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {

  componentDidMount(){
  // find the `<map>` node on the DOM

  const mapDOMNode = this.refs.map;

  // set the map to show SF
  const mapOptions = {
    center: {lat: 37.7758, lng: -122.435}, // this is SF
    zoom: 12
  };

  // wrap the mapDOMNode in a Google Map
  this.map = new google.maps.Map(mapDOMNode, mapOptions);
  this.MarkerManager = new MarkerManager(this.map);

  google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat:north, lng: east },
      southWest: { lat: south, lng: west } };
    this.props.updateBounds(bounds);
  });
}

componentDidUpdate(){
  this.MarkerManager.updateMarkers(this.props.benches);
}

  render() {
    return (
      <div id='map-container' ref='map'>

      </div>
    );
  }
}

export default BenchMap;
