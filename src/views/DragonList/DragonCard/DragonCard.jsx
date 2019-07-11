import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteDragon } from '../../../actions';

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
    this.actionFromEdit = this.actionFromEdit.bind(this);
    this.deleteDragon = this.deleteDragon.bind(this);
  }

  actionFromEdit () {
    this.setState({ isEditing: !this.state.isEditing} );
  }

  handleChecked () {
    this.setState({ isEditing: !this.state.isEditing} );
  }

  deleteDragon () {
    const { deleteDragon, dragon } = this.props
    deleteDragon(dragon.id)
  }

  render() {
    let card;
    if (!this.state.isEditing) {
      card = <section>
        <p><Link to={`/dragon/${this.props.dragon.id}`}>{this.props.dragon.id}</Link></p>
        <p>{this.props.dragon.name}</p>
        <p>{this.props.dragon.createdAt}</p>
        <p>{this.props.dragon.type}</p>
        <p>{this.props.dragon.histories}</p>
      </section>
    } else {
      card = <DragonCardEdit dragon={this.props.dragon} onSave={this.actionFromEdit} onCancel={this.actionFromEdit}/>
    }

    return (
      <section>
        <p>
          <input type="checkbox" onChange={this.handleChecked} checked={this.state.isEditing} />
        </p>
        <p><button onClick={this.deleteDragon}>X</button></p>
        {card}
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteDragon: (id) => {
      dispatch(deleteDragon(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(DragonCard);
