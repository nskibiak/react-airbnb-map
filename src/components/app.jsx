// import React from 'react';

// function App() {
//   return <p>"Help"</p>;
// }

// export default App;

import React, { Component } from 'react';
import Flat from './flat';
import Map from './map';

require('dotenv').config()

class App extends Component {

  render() {

    return (
      <div>
        <div className='flat-list'>
          <Flat />
        </div>
        <div className='map-container'>
          <Map />
        </div>
      </div>
    );
  }

}

export default App;
