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
    const state = { dragon: this.initialProps }
    state.dragon[target.getAttribute('name')] = target.value
    this.setState(state);
  }

  saveDragon() {
    this.props.onSaveDragon(this.state.dragon);
  }

  isValidEntry (entry) {
    return (entry && entry.trim())
  }

  render() {
    const { savedDragon } = this.props

    return (
      <section className="dragon-profile-create">
        <label>
          Nome:
          <input type="text" name="name" onChange={this.handleInputChange} value={this.state.dragon.name}/>
        </label>
        <label>
          Tipo:
          <input type="text" name="type" onChange={this.handleInputChange} value={this.state.dragon.type}/>
        </label>
        <footer>
          <button disabled={!this.isValidEntry(this.state.dragon.name) || !this.isValidEntry(this.state.dragon.type)} onClick={this.saveDragon}>SALVAR</button>
        </footer>
        {savedDragon && (
          <Redirect to="/dragon-list"/>
        )}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  savedDragon: state.reducer.savedDragon
});

const mapDispatchToProps = dispatch => {
  return {
    onSaveDragon: (dragon) => {
      dispatch(saveDragon(dragon));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonProfileEdit)
