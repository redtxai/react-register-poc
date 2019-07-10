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
    this.initialProps =  Object.assign({}, this.state.dragon);
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
  }

  render() {
      return (
        <section>
          <p><input type="text" name="name" onChange={this.handleInputChange} value={this.state.dragon.name}/></p>
          <p><input type="text" name="type" onChange={this.handleInputChange} value={this.state.dragon.type}/></p>
          <p><button onClick={this.saveDragon}>Salvar</button></p>
          <p><button onClick={this.cancelEdit}>Cancelar</button></p>
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