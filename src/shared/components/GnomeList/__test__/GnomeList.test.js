import React from 'react';
import { shallow } from 'enzyme';
import GnomeList from '../GnomeList';

describe('<GnomeList />', () => {
  describe('render', () => {
    const gnomes = [
      { id: '1', name: 'John', professions: ['chef'], thumbnail: 'photo.jpg' },
      { id: '2', name: 'Max', professions: ['runner'], thumbnail: 'photo.jpg' },
    ];
    let gnomeList;

    beforeEach(() => {
      gnomeList = shallow(<GnomeList gnomes={gnomes} />);
    });

    it('should render GnomeListContainer with GnomeCards', () => {
      const gnomeListContainer = gnomeList.find('GnomeListContainer');

      expect(gnomeListContainer.exists()).toBe(true);
      expect(gnomeListContainer.find('GnomeCard').length).toBe(2);
    });

    it('should render GnomeCard with key as the id and all the values from the gnome', () => {
      const gnomeCard = gnomeList.find('GnomeCard').first();

      expect(gnomeCard.exists()).toBe(true);
      expect(gnomeCard.key()).toBe('1');
      expect(gnomeCard.props()).toEqual(gnomes[0]);
    });
  });
});
