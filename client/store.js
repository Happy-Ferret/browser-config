import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import  { browserHistory } from 'react-router';


// import route reducer

import rootReducer from './reducers/index';

import theme from './data/theme'
import tabs from './data/tabs'

//create object for default data

const defaultState = {
  theme,
  tabs
};

const store = createStore(rootReducer, defaultState,  window.devToolsExtension && window.devToolsExtension());
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
