import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';
import flats from '../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flatArray: flats
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flatArray} />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;