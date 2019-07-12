import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from './routes';

import './App.scss';

class App extends Component {
  render() {
    let loader = null
    if (this.props.loader) {
      loader = <div className="backdrop">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    }
    return (
      <article className="root-article">
        <Routes/>
        {loader}
      </article>
    );
  }
}

const mapStateToProps = state => ({
  loader: state.reducer.loader
});

export default connect(mapStateToProps, null)(App);;
