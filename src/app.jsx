import React, { Component } from 'react';
import Flat from 'flat';

class App extends Component {

  render() {
    const { selectedGifId, gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.selectGif} gifs={gifs} />
        </div>
      </div>
    );
  }

}

export default App;
