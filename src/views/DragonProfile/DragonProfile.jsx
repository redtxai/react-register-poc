import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDragonProfile } from '../../actions';

import './DragonProfile.scss';

import DragonProfileEdit from './DragonProfileEdit';
import DragonProfileCreate from './DragonProfileCreate';

class DragonProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragon: props.dragon
    };
  }

  componentDidMount() {
    const { fetchDragonProfile, match } = this.props
    if (match.params.id) {
      fetchDragonProfile(match.params.id)
    }
  }

  render() {
    if (this.props.match.params.id) {
      return <DragonProfileEdit/>
    }
    return <DragonProfileCreate/>
  }
}

const mapStateToProps = state => {
  return {
    dragon: state.reducer.dragon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDragonProfile: (id) => {
      dispatch(fetchDragonProfile(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonProfile);
