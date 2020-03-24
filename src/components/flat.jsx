import React, { Component, Fragment } from 'react';

class Flat extends Component {

  handleClick = (event) => {
    this.props.renderFlat();
  }

  render() {
    const flat = this.props.flat;

    return (
      <Fragment>
        <div class="card" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
        }} onClick={this.handleClick} >
          <div class="card-category">{flat.price} EUR</div>
          <div class="card-description">
            <h2>{flat.name}</h2>
          </div>
          <a class="card-link" href="#"></a>
        </div>
      </Fragment>
    );
  }
}

export default Flat;
