import React from 'react';
import  { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Main from './components/Main';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}></IndexRoute>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));
