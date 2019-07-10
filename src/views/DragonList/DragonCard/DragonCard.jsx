import React, { Component } from 'react';

import './DragonCard.scss';
import DragonCardEdit from './DragonCardEdit';

class DragonCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      dragon: this.props.dragon
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.saveActionFromEdit = this.saveActionFromEdit.bind(this);
  }

  saveActionFromEdit () {
    this.setState({ isEditing: !this.state.isEditing} );
  }

  handleChecked () {
    this.setState({ isEditing: !this.state.isEditing} );
  }

  render() {
    let card;
    if (!this.state.isEditing) {
      card = <section>
        <p>{this.props.dragon.id}</p>
        <p>{this.props.dragon.name}</p>
        <p>{this.props.dragon.createdAt}</p>
        <p>{this.props.dragon.type}</p>
        <p>{this.props.dragon.histories}</p>
      </section>
    } else {
      card = <DragonCardEdit dragon={this.props.dragon} onSave={this.saveActionFromEdit}/>
    }

    return (
      <section>
        <p>
          <input type="checkbox" onChange={this.handleChecked} checked={this.state.isEditing} />
        </p>
        {card}
      </section>
    )
  }
}

export default DragonCard;