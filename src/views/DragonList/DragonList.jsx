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
      <article className="dragon-list">
        <p className="buttons">
          <Link to={`/dragon`}>CRIAR DRAGÃO</Link>
          <button className="logout" onClick={this.logout}>LOGOUT</button>
        </p>
        <section className="card-list">
          {this.props.dragons.map((dragon) =>
            <DragonCard key={dragon.id} dragon={dragon}/>
          )}
        </section>
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
