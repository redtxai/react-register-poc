import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <section>
        <label>Email: <input type="email"/></label>
        <label>Password: <input type="password"/></label>
        <button>Login</button>
      </section>
    )
  }
}

export default Login