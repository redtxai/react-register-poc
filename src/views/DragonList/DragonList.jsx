import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllDragons } from '../../actions';

import './DragonList.scss';
import DragonCard from './DragonCard';

class DragonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragonCardList: []
    };
  }

  componentDidMount() {
    const { fetchAllDragons } = this.props
    fetchAllDragons()
  }

  render() {
    if (!this.props.dragons.length) {
      return null
    }
    return (
      <article>
        {this.props.dragons.map((dragon) =>
          <DragonCard key={dragon.id} dragon={dragon}/>
        )}
      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    dragons: state.dragons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDragons: () => {
      dispatch(fetchAllDragons());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
