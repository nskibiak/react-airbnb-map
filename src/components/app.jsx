// import React from 'react';

// function App() {
//   return <p>"Help"</p>;
// }

// export default App;

import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map';

require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      selectedFlat: null
    };
  }

  renderFlat = (flat) => {
    this.setState({
      lat: flat.flat.lat,
      lng: flat.flat.lng,
      selectedFlat: flat
    });
  }

  render() {

    return (
      <div>
        <FlatList renderFlat={this.renderFlat} selectedFlat={this.state.selectedFlat} />
        <div className='map-container'>
          <Map lat={this.state.lat} lng={this.state.lng}/>
        </div>
      </div>
    );
  }

}

export default App;
