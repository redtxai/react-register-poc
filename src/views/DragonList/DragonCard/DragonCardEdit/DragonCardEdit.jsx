import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveDragon } from '../../../../actions';

import './DragonCardEdit.scss';

class DragonCardEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragon: {
        id: props.dragon.id || '',
        name: props.dragon.name || '',
        createdAt: props.dragon.createdAt || '',
        type: props.dragon.type || ''
      }
    };
    this.initialProps = Object.assign({}, this.state.dragon);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveDragon = this.saveDragon.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  handleInputChange({ target }) {
    const state = { dragon: this.initialProps }
    state.dragon[target.getAttribute('name')] = target.value
    this.setState(state);
  }

  saveDragon() {
    this.props.onSaveDragon(this.state.dragon);
    this.props.onSave();
  }

  cancelEdit() {
    this.setState({ dragon: this.initialProps });
    this.props.onCancel();
  }

  isValidEntry (entry) {
    return (entry && entry.trim())
  }

  render() {
    return (
      <section className="dragon-card-edit">
        <label>
          Nome:
          <input type="text" name="name" onChange={this.handleInputChange} value={this.state.dragon.name}/>
        </label>
        <label>
          Tipo:
          <input type="text" name="type" onChange={this.handleInputChange} value={this.state.dragon.type}/>
        </label>
        <footer>
          <button className="save-button" disabled={!this.isValidEntry(this.state.dragon.name) || !this.isValidEntry(this.state.dragon.type)} onClick={this.saveDragon}>Salvar</button>
          <button className="cancel-button" onClick={this.cancelEdit}>Cancelar</button>
        </footer>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveDragon: (dragon) => {
      dispatch(saveDragon(dragon));
    }
  };
};

export default connect(null, mapDispatchToProps)(DragonCardEdit);