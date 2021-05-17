import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';
import flats from '../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flatArray: flats,
      lat: 34.0522,
      lng: -118.2437
    };
  }

  handleMap = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
    this.handleMap = this.handleMap.bind(this);
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flatArray} handleMap={this.handleMap}/>
        </div>
        <div className="map-container">
          <SimpleMap lat={this.state.lat} lng={this.state.lng} />
        </div>
      </div>
    );
  }
}

export default App;