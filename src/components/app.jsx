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

  render() {

    return (
      <div>
        <FlatList />
        <div className='map-container'>
          <Map />
        </div>
      </div>
    );
  }

}

export default App;
