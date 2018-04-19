import React from 'react';
import { shallow } from 'enzyme';
import HomeGrid from '../HomeGrid';

describe('<HomeGrid />', () => {
  it('render', () => {
    expect(shallow(<HomeGrid />)).toMatchSnapshot();
  });
});
