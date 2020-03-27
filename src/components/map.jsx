import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

require('dotenv').config({ path: '../..' })

const Marker = ( flat ) =>
  <div className='marker'></div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.8566,
      lng: 2.3522
    },
    zoom: 13
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
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
