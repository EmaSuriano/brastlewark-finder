import React from 'react';
import { shallow } from 'enzyme';
import GnomeListContainer from '../GnomeListContainer';

describe('<GnomeListContainer />', () => {
  it('render', () => {
    expect(shallow(<GnomeListContainer />)).toMatchSnapshot();
  });
});
