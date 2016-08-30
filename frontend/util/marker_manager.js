class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches){
    let add = this._benchesToAdd(benches);
    add.forEach((bench) => {
      this.markers.push(this._createMarkerFromBench(bench));
    });
    this.markers.forEach((marker) => {
      marker.setMap(this.map);
    });
    let remove = this._markersToRemove(benches);
    console.log(remove);
    remove.forEach((marker) => {
      this._removeMarker(marker);
    });
  }

  _benchesToAdd(benches){
    if (benches === undefined) {
      return [];
    }
    else if (benches.length === this.markers.length) {
      return [];
    } else {
      let toAdd = [];
      let added;

      for (let i = 0; i < benches.length; i++) {
        added = false;
        for (let j = 0; j < this.markers.length; j++) {
          if (benches[i].lat === this.markers[j].position.lat &&
             benches[i].lng === this.markers[j].position.lng){
            added = true;
          }
        }
        if (added === false);
        toAdd.push(benches[i]);
      }

      return toAdd;
    }
  }

  _createMarkerFromBench(bench){
    return new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });
  }

  _markersToRemove(benches) {
    if (benches === undefined) {
      return [];
    }
    else if (benches.length === this.markers.length) {
      return [];
    } else {
      let toRemove = [];
      let inState;

      for (let j = 0; j < this.markers.length; j++) {
        inState = false;
        for (let i = 0; i < benches.length; i++) {
          console.log(benches[i].lat);
          console.log(this.markers[j].position.lat);
          if (benches[i].lat === this.markers[j].position.lat() &&
             benches[i].lng === this.markers[j].position.lng()){
            inState = true;
          }
        }
        if (inState === false) {
          console.log("here!");
          toRemove.push(this.markers[j]);
        }
      }
      return toRemove;
    }
  }

  _removeMarker(marker) {
    marker.setMap(null);
    let idx = this.markers.indexOf(marker);
    this.markers.splice(idx, 1);
  }
}

export default MarkerManager;
