import React, { Component, Fragment } from 'react';

class Flat extends Component {

  handleClick = (props) => {
    // this.props.renderFlat();
    console.log(props.flat.lat, props.flat.lng);
  }

  render() {
    const flat = this.props.flat;

    return (
      <Fragment>
        <div className="card" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
        }}
          // onClick={this.handleClick(this.props)}
          onClick={(event) => {this.handleClick(this.props)}}
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
