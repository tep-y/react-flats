import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.handleMap(this.props.lat, this.props.lng);
  }

  render() {
    const src = `${this.props.flat.imageUrl}`;
    return(
      <div className="card" onClick={this.handleClick} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("${src}")` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>

    )
  }
}

export default Flat;