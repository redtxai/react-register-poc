import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveDragon } from '../../../actions';

import './DragonProfileEdit.scss';

class DragonProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFullfilled: false,
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
  }

  handleInputChange({ target }) {
    const state = { dragon: this.initialProps, requestFullfilled: false }
    state.dragon[target.getAttribute('name')] = target.value
    this.setState(state);
  }

  saveDragon() {
    const state = { dragon: this.initialProps, requestFullfilled: true }
    this.props.onSaveDragon(this.state.dragon);
    this.setState(state);
  }

  render() {
    const { requestFullfilled } = this.state

    return (
      <section>
        <p><input type="text" name="name" onChange={this.handleInputChange} value={this.state.dragon.name}/></p>
        <p><input type="text" name="type" onChange={this.handleInputChange} value={this.state.dragon.type}/></p>
        <p><button onClick={this.saveDragon}>Salvar</button></p>
        {requestFullfilled && (
          <Redirect to="/dragon-list"/>
        )}
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

export default connect(null, mapDispatchToProps)(DragonProfileEdit)
