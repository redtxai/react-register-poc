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
    if (window.confirm('Você tem certeza que deseja deletar esse dragão?')) {
      const { deleteDragon, dragon } = this.props
      deleteDragon(dragon.id)
    }
  }

  render() {
    let card;
    if (!this.state.isEditing) {
      card = 
      <section>
        <p className="label">Nome:</p>
        <p className="dragon-attr">{this.props.dragon.name}</p>
        <p className="label">Tipo:</p>
        <p className="dragon-attr">{this.props.dragon.type}</p>
        <p className="label">Data criação:</p>
        <p className="dragon-attr">{this.props.dragon.createdAt}</p>
        <p className="details-line">
          <Link className="details-button" to={`/dragon/${this.props.dragon.id}`}>
            Ver
          </Link>
        </p>
      </section>
    } else {
      card = <DragonCardEdit dragon={this.props.dragon} onSave={this.actionFromEdit} onCancel={this.actionFromEdit}/>
    }

    return (
      <section className="dragon-card">
        <header>
          <input type="checkbox" onChange={this.handleChecked} checked={this.state.isEditing} />
          <button className="remove-button" onClick={this.deleteDragon}>X</button>
        </header>
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
