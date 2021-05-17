import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div className="marker"></div>;

class SimpleMap extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 34.0522,
  //     lng: -118.2437
  //   },
  //   zoom: 11
  // };

  render() {
    console.log(`${this.props.lat}`);
    const API_KEY = "AIzaSyCghJy9kn0hDhPAj8GIYIyYe0r1JMWw6eQ";

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
