import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const src = `${this.props.imgUrl}`;
    return(
      <div className="card" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))", backgroundImage: `url("${src}")` }}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>

    )
  }
}

export default Flat;