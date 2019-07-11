import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom'
import { connect } from 'react-redux';
import { createDragon } from '../../../actions';

import './DragonProfileCreate.scss';

class DragonProfileCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestFullfilled: false,
      name: '',
      type: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createDragon = this.createDragon.bind(this);
  }

  handleInputChange({ target }) {
    const state = {}
    state[target.getAttribute('name')] = target.value
    this.setState(state);
  }

  createDragon() {
    const state = { requestFullfilled: true }
    this.props.onCreateDragon(this.state);
    this.setState(state);
  }

  render() {
    const { requestFullfilled } = this.state

    return (
      <section>
        <p><input type="text" name="name" onChange={this.handleInputChange} value={this.state.name}/></p>
        <p><input type="text" name="type" onChange={this.handleInputChange} value={this.state.type}/></p>
        <p><button onClick={this.createDragon}>Criar</button></p>
        {requestFullfilled && (
          <Redirect to="/dragon-list"/>
        )}
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateDragon: (dragon) => {
      dispatch(createDragon(dragon));
    }
  };
};

export default connect(null, mapDispatchToProps)(DragonProfileCreate);
