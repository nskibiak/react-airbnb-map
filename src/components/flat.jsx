import React, { Component, Fragment } from 'react';

class Flat extends Component {

  changeMarker = (flat) => {
    this.props.renderFlat(flat);
  }

  render() {
    const flat = this.props.flat;
    const selectedFlat = this.props.selectedFlat;

    return (
      <Fragment>
        <div className={(flat === selectedFlat) ? 'card clicked' : 'card' } style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
        }}
          // onClick={this.changeMarker(this.props)} // REMOVED THIS BECAUSE IT WAS FIRING FOR ALL FLATS ON RENDER
          onClick={(event) => {this.changeMarker({flat})}}
        >
          <div className="card-category">{flat.price} EUR</div>
          <div className="card-description">
            <h2>{flat.name}</h2>
          </div>
          <button className="card-link" flat={flat} href="#"></button>
        </div>
      </Fragment>
    );
  }
}

export default Flat;
