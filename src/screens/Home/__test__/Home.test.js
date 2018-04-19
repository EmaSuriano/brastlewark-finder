import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
  const criteria = {
    name: '',
    profesions: [],
  };
  const setGnomeCriteriaStub = jest.fn();

  let home;
  let instance;

  beforeEach(() => {
    setGnomeCriteriaStub.mockRestore();
    home = shallow(
      <Home criteria={criteria} setGnomeCriteria={setGnomeCriteriaStub} />,
    );
    instance = home.instance();
  });

  describe('render', () => {
    it('should render HomeGrid', () => {
      expect(home.find('HomeGrid').exists()).toBe(true);
    });

    it('should render Title as Brastlewark Finder', () => {
      const title = home.find('Title');

      expect(title.exists()).toBe(true);
      expect(title.html().includes('Brastlewark Finder')).toBe(true);
    });

    it('should render FiltersForm with onSubmit', () => {
      const filtersForm = home.find('FiltersForm');
      expect(filtersForm.exists()).toBe(true);
      expect(filtersForm.prop('onSubmit')).toBe(instance.onSubmit);
    });

    it('should render TextField', () => {
      home.setState({ name: 'customName' });
      const textField = home.find('TextField');

      expect(textField.exists()).toBe(true);
      expect(textField.prop('value')).toBe('customName');
      expect(textField.prop('onChange')).toBe(instance.changeName);
      expect(textField.prop('placeholder')).toBe("Type gnome's name");
    });

    it('should render ProfesionsSelector', () => {
      home.setState({ professions: ['runner'] });
      const professionSelector = home.find('ProfessionSelector');

      expect(professionSelector.exists()).toBe(true);
      expect(professionSelector.prop('selected')).toEqual(['runner']);
      expect(professionSelector.prop('onChange')).toBe(
        instance.changeProfessions,
      );
    });

    describe('should render Button', () => {
      let button;

      beforeEach(() => {
        button = home.find('Button');
      });

      it('should render Button with Search', () => {
        expect(button.exists()).toBe(true);
        expect(button.children().text()).toBe('Search');
      });

      it('should be disable when the name is empty and professions too', () => {
        expect(button.prop('disabled')).toBe(true);
      });

      it('should not be disabled when any of the field has value', () => {
        const validStates = [
          { name: 'something', professions: [] },
          { name: '', professions: ['runner'] },
          { name: 'something', professions: ['runner'] },
        ];

        validStates.forEach(state => {
          home.setState(state);
          button = home.find('Button');
          expect(button.prop('disabled')).toBe(false);
        });
      });
    });

    it('should render Message when there is not filter applied of search', () => {
      const message = home.find('Message');

      expect(home.find('GnomeResult').exists()).toBe(false);
      expect(message.exists()).toBe(true);
      expect(message.prop('fontSize')).toBe('1.2em');
      expect(message.children().text()).toBe(
        'Please filter by name or professions in order to search!',
      );
    });

    it('should render GnomeResult there is some filter applied', () => {
      home.setProps({ isFilterApplied: true });
      const gnomeResult = home.find('GnomeResult');

      expect(home.find('Message').exists()).toBe(false);
      expect(gnomeResult.exists()).toBe(true);
      expect(gnomeResult.prop('criteria')).toBe(criteria);
    });
  });

  describe('inner functions', () => {
    it('onSubmit should call setGnomeCriteria with state', () => {
      const fakeEvent = {
        preventDefault: jest.fn(),
      };
      instance.onSubmit(fakeEvent);

      expect(fakeEvent.preventDefault).toBeCalled();
      expect(setGnomeCriteriaStub).toBeCalled();
    });

    it('changeName should take the value from event and save it inside the state', () => {
      instance.changeName({ target: { value: 'John' } });

      expect(home.state('name')).toBe('John');
    });

    it('changeProfessions should save profesions inside state', () => {
      instance.changeProfessions(['runner', 'chef']);

      expect(home.state('professions')).toEqual(['runner', 'chef']);
    });
  });
});
