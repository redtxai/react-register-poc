import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Redirect  } from 'react-router-dom'

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    this.props.onLogin();
  }

  render() {
    if (this.props.logged) {
      return <Redirect to="/dragon-list"/>
    }
    return (
      <section>
        <label>Email: <input type="email"/></label>
        <label>Password: <input type="password"/></label>
        <button onClick={this.login}>Login</button>
      </section>
    )
  }
}


const mapStateToProps = state => ({
  logged: state.reducer.logged
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => {
      dispatch(login());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);