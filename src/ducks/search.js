import { createSelector } from 'reselect';

//ACTIONS
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_PROFESSIONS = 'CHANGE_PROFESSIONS';

//REDUCER
const initialState = {
  name: '',
  professions: [],
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case CHANGE_PROFESSIONS:
      return {
        ...state,
        professions: action.professions,
      };
    default:
      return state;
  }
}

//SELECTORS
const getSearch = state => state.search;

const getName = createSelector(getSearch, search => search.name);

const getProfessions = createSelector(
  getSearch,
  search => search.professions || [],
);

const isFilterApplied = createSelector(
  getName,
  getProfessions,
  (name, professions) => name || professions.length > 0,
);

export const selectors = {
  getName,
  getProfessions,
  isFilterApplied,
};

//ACTION CREATORS
export const changeName = name => ({
  type: CHANGE_NAME,
  name,
});

export const changeProfessions = professions => ({
  type: CHANGE_PROFESSIONS,
  professions,
});

export const actionCreators = {
  changeName,
  changeProfessions,
};
