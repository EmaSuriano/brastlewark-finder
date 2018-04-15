import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import search from './ducks/search';

const store = createStore(
  combineReducers({
    search,
  }),
  devToolsEnhancer(),
);

export default store;
