import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../views/Login/Login';
import DragonList from '../views/DragonList';
import DragonProfile from '../views/DragonProfile';

const PrivateRoute = ({ component: Component, logged, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      logged ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

class Routes extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <PrivateRoute path="/dragon-list" logged={this.props.logged} component={DragonList}/>
          <PrivateRoute path="/dragon/:id?" logged={this.props.logged} component={DragonProfile}/>
          <Route path="*" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
};

const mapStateToProps = state => ({
  logged: state.reducer.logged
});

export default connect(mapStateToProps, null)(Routes);;