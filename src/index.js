import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

import Layout from './components/Layout';


const store = createStore(
  (state = {}) => state,
  compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f )// connect to redux devtools
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
