import React, { Component, Fragment } from 'react';

class Flat extends Component {

  changeMarker = (flat) => {
    this.props.renderFlat(flat);
    // console.log(this.event.target);
  }

  changeBorder = (event) => {
    console.log('fired change border');
    console.log(event.target)
  }

  render() {
    const flat = this.props.flat;

    return (
      <Fragment>
        <div className="card" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
        }}
          // onClick={this.changeMarker(this.props)} // REMOVED THIS BECAUSE IT WAS FIRING FOR ALL FLATS ON RENDER
          onClick={(event) => {
            this.changeMarker({flat});
            this.changeBorder();
          }}
        >
          <div className="card-category">{flat.price} EUR</div>
          <div className="card-description">
            <h2>{flat.name}</h2>
          </div>
          <a className="card-link" href="#"></a>
        </div>
      </Fragment>
    );
  }
}

export default Flat;
