import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

require('dotenv').config({ path: '../..' })

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
          // bootstrapURLKeys={{ key: 'AIzaSyB3W_l9SMvHl6iBmpDiaOnWgXREzcMtJuI' }}
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
