import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDragonProfile, logout } from '../../actions';

import './DragonProfile.scss';

import DragonProfileEdit from './DragonProfileEdit';
import DragonProfileCreate from './DragonProfileCreate';

class DragonProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragon: props.dragon
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.onLogout();
  }

  componentDidMount() {
    const { fetchDragonProfile, match } = this.props
    if (match.params.id) {
      fetchDragonProfile(match.params.id)
    }
  }

  getDragonProfile () {
    if (this.props.match.params.id) {
      if (this.props.fetchingDragon) {
        return null
      }
      return <DragonProfileEdit dragon={this.props.dragon}/>
    } else {
      return <DragonProfileCreate/>
    }
  }

  render() {
    return (
      <article className="dragon-profile">
        <p className="buttons">
          <Link to={`/dragon-list`}>VOLTAR</Link>
          <button className="logout" onClick={this.logout}>LOGOUT</button>
        </p>
        <section className="profile-content">
          {this.getDragonProfile()}
        </section>
      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    dragon: state.reducer.dragon,
    fetchingDragon: state.reducer.fetchingDragon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDragonProfile: (id) => {
      dispatch(fetchDragonProfile(id));
    },
    onLogout: () => {
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonProfile);
