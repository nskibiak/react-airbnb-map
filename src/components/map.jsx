import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

require('dotenv').config({ path: '../..' })

const AnyReactComponent = ({ text }) =>
  <div style={{
    backgroundColor: 'red',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
  }}>
    {text}
  </div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.8566,
      lng: 2.3522
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.8566}
            lng={2.3522}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
