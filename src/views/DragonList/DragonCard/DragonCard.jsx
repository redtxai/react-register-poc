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
    this.setState({ isEditing: !this.state.isEditing} )
  }

  handleChecked () {
    this.setState({ isEditing: !this.state.isEditing} )
  }

  deleteDragon () {
    if (window.confirm('Você tem certeza que deseja deletar esse dragão?')) {
      const { deleteDragon, dragon } = this.props
      deleteDragon(dragon.id)
    }
  }

  convertDateTime (date) {
    const dateObject = new Date(date)
    const dd = String(dateObject.getDate()).padStart(2, '0')
    const mm = String(dateObject.getMonth() + 1).padStart(2, '0')
    const yyyy = dateObject.getFullYear()

    let hours = dateObject.getHours()
    let minutes = dateObject.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    const strTime = hours + ':' + minutes + ' ' + ampm

    return dd + '/' + mm + '/' + yyyy + ' ' + strTime
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
        <p className="dragon-attr">{this.convertDateTime(this.props.dragon.createdAt)}</p>
        <p className="details-line">
          <Link className="details-button" to={`/dragon/${this.props.dragon.id}`}>
            VER
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

export default connect(null, mapDispatchToProps)(DragonCard)
