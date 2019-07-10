import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveDragon } from '../../../../actions';

import './DragonCardEdit.scss';

class DragonCardEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragon: {
        id: this.props.dragon.id || '',
        name: this.props.dragon.name || '',
        createdAt: this.props.dragon.createdAt || '',
        type: this.props.dragon.type || ''
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveDragon = this.saveDragon.bind(this);
  }

  handleInputChange({ target }) {
    const state = { dragon: this.props.dragon }
    state.dragon[target.getAttribute('name')] = target.value
    this.setState(state);
  }

  saveDragon() {
    this.props.onSaveDragon(this.state.dragon);
    this.props.onSave();
  }

  render() {
      return (
        <section>
          <p><input type="text" name="name" onChange={this.handleInputChange} value={this.state.dragon.name}/></p>
          <p><input type="text" name="type" onChange={this.handleInputChange} value={this.state.dragon.type}/></p>
          <p><button onClick={this.saveDragon}>Salvar</button></p>
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