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
    console.log('called');
  }

  render() {

    return (
      <div>
        <FlatList renderFlat={this.renderFlat} />
        <div className='map-container'>
          <Map lat={48.8566} lng={2.3522}/>
        </div>
      </div>
    );
  }

}

export default App;
