import searchReducer, { actionCreators, selectors, actions } from '../search';

describe('search Duck', () => {
  const state = {
    name: 'Max',
    professions: ['runner'],
  };

  describe('reducer', () => {
    it('should set name and professions from action when type is SET_GNOME_CRITERIA', () => {
      const action = {
        type: actions.SET_GNOME_CRITERIA,
        name: 'John',
        professions: ['chef'],
      };

      expect(searchReducer(state, action)).toEqual({
        name: 'John',
        professions: ['chef'],
      });
    });

    it('should return state on default', () => {
      const action = {
        type: 'UNKNOW_ACTION',
      };

      expect(searchReducer(state, action)).toBe(state);
    });
  });

  describe('selectors', () => {
    it('getName should return name from store', () => {
      expect(selectors.getName({ search: state })).toBe('Max');
    });

    it('getProfessions should return professions from store', () => {
      expect(selectors.getProfessions({ search: state })).toEqual(['runner']);
    });

    it('getCriteria should return name and profesisons in one object', () => {
      expect(selectors.getCriteria({ search: state })).toEqual({
        name: 'Max',
        professions: ['runner'],
      });
    });

    describe('isFilterApplied', () => {
      it('should return false when name and professions are empty', () => {
        const emptyState = {
          name: '',
          profesisons: [],
        };

        expect(selectors.isFilterApplied({ search: emptyState })).toBe(false);
      });

      it('should return true when name or professions have value', () => {
        expect(selectors.isFilterApplied({ search: state })).toBe(true);
      });
    });
  });

  describe('actionCreators', () => {
    it('setGnomeCriteria should return an action with SET_GNOME_CRITERIA, name and professions', () => {
      const expectedAction = {
        type: actions.SET_GNOME_CRITERIA,
        name: 'Will',
        professions: ['potter'],
      };

      expect(
        actionCreators.setGnomeCriteria({
          name: 'Will',
          professions: ['potter'],
        }),
      ).toEqual(expectedAction);
    });
  });
});
