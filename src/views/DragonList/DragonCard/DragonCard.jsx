import React, { Component } from 'react';
import './DragonCard.scss';

class DragonCard extends Component {
  render() {
    return (
      <section>
        <p>{this.props.value.id}</p>
        <p>{this.props.value.name}</p>
        <p>{this.props.value.createdAt}</p>
        <p>{this.props.value.type}</p>
        <p>{this.props.value.histories}</p>
      </section>
    )
  }
}

export default DragonCard;