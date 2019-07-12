import React, { Component } from 'react';
import Routes from './routes';

import './App.scss';

class App extends Component {
  render() {
    return (
      <article className="root-article">
        <Routes/>
        <div className="backdrop">
          <div className="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </article>
    );
  }
}

export default App;
