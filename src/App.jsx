import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// import Login from './views/Login/Login';
import DragonList from './views/DragonList';
import DragonProfile from './views/DragonProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" component={Login}/> */}
          <Route path="/dragon-list" component={DragonList}/>
          <Route path="/dragon/:id?" component={DragonProfile}/>
          {/* <PrivateRoute authed={fakeAuth.isAuthenticated} path="/dragon-list" component={DragonList} /> */}
        </Switch>
      </Router>
    );
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     fakeAuth.isAuthenticated ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

export default App;
