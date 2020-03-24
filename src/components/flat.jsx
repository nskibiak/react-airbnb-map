import React, { Component, Fragment } from 'react';
import flats from '../data/flats';

class Flat extends Component {

  render() {

    const Background = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';

    return (
      <Fragment>
        <div class="card" style={{
          backgroundImage: `url(${Background})`
        }}>
          <div class="card-category">150 EUR</div>
          <div class="card-description">
            <h2>Super 60m2 in trendy neighborhood!</h2>
          </div>
          <a class="card-link" href="#"></a>
        </div>
      </Fragment>
    );
  }
}

export default Flat;
