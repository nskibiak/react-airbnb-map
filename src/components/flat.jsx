import React, { Component, Fragment } from 'react';

class Flat extends Component {

  handleClick = (event) => {
    console.log('you clicked');
  }

  render() {

    return (
      <Fragment>
        <div class="card" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
        }} onClick={this.handleClick} >
          <div class="card-category">{this.props.flat.price} EUR</div>
          <div class="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a class="card-link" href="#"></a>
        </div>
      </Fragment>
    );
  }
}

export default Flat;
