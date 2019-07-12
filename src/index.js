import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios'

import './index.css';
import App from './App';
import rootReducer from './reducers';
import { toggleLoader } from './actions';
const store = createStore(rootReducer, applyMiddleware(thunk));

const requestHandler = (request) => {
  store.dispatch(toggleLoader(true));
  return request
}

const errorHandler = (error) => {
  store.dispatch(toggleLoader(false));
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  store.dispatch(toggleLoader(false));
  return response
}

axios.interceptors.request.use(
  request => requestHandler(request)
)

axios.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
