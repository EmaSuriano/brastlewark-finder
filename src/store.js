import { createStore, applyMiddleware, combineReducers } from 'redux';
import search from './ducks/search';
import { devToolsEnhancer } from 'redux-devtools-extension';
const store = createStore(
  combineReducers({
    search,
  }),
  devToolsEnhancer(),
);

export default store;
