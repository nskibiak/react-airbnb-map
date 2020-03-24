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

  renderFlat = () => {
    console.log('you clicked in app.jsx')
  }

  render() {

    return (
      <div>
        <FlatList renderFlat={this.renderFlat} />
        <div className='map-container'>
          <Map />
        </div>
      </div>
    );
  }

}

export default App;
