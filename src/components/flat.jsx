import React, { Component, Fragment } from 'react';

class Flat extends Component {

  render() {

    const imageUrl = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';

    return (
      <Fragment>
        <div class="card" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
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
