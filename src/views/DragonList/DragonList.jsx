import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllDragons, logout } from '../../actions';

import './DragonList.scss';
import DragonCard from './DragonCard';

class DragonList extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.onLogout();
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
        <p><button onClick={this.logout}>Logout</button></p>
        <p><Link to={`/dragon`}>Criar Dragão</Link></p>
        {this.props.dragons.map((dragon) =>
          <DragonCard key={dragon.id} dragon={dragon}/>
        )}
      </article>
    )
  }
}

const mapStateToProps = state => ({
  dragons: state.reducer.dragons
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDragons: () => {
      dispatch(fetchAllDragons());
    },
    onLogout: () => {
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonList);
