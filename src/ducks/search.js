import { createSelector } from 'reselect';

//ACTIONS
const SET_GNOME_CRITERIA = 'SET_GNOME_CRITERIA';

//REDUCER
const initialState = {
  name: '',
  professions: [],
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SET_GNOME_CRITERIA:
      return {
        ...state,
        name: action.name,
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

const getCriteria = createSelector(
  getName,
  getProfessions,
  (name, professions) => ({ name, professions }),
);

const isFilterApplied = createSelector(
  getName,
  getProfessions,
  (name, professions) => !!name || professions.length > 0,
);

export const selectors = {
  getName,
  getProfessions,
  isFilterApplied,
  getCriteria,
};

//ACTION CREATORS
const setGnomeCriteria = criteria => ({
  type: SET_GNOME_CRITERIA,
  ...criteria,
});

export const actionCreators = {
  setGnomeCriteria,
};
