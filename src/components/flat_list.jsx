import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return(
        this.props.flats.map(flat => {
          return <Flat key={flat.name} lat={flat.lat} lng={flat.lng} handleMap={this.props.handleMap} name={flat.name} imgUrl={flat.imageUrl} price={flat.price} currency={flat.priceCurrency} />
        })
    )
  }
}

export default FlatList;