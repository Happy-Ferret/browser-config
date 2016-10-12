import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import theme from './theme';
import tabs from './tabs';

const rootReducer = combineReducers({
  theme,
  tabs,
  routing: routerReducer
});

export default rootReducer;
