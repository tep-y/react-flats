import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div className="marker"></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 34.0522,
      lng: -118.2437
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCghJy9kn0hDhPAj8GIYIyYe0r1JMWw6eQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={34.0522}
            lng={-118.2437}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
