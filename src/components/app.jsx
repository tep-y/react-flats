import React, { Component } from 'react';

import SimpleMap from './map.jsx';

class App extends Component {
  render() {
    return (
      <div className="map-container">
        <SimpleMap />
      </div>
    );
  }
}

export default App;