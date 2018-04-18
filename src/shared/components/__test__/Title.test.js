import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('<Title />', () => {
  it('should render Title with defaultValues', () => {
    expect(shallow(<Title />)).toMatchSnapshot();
  });

  it('should render Title with red color', () => {
    expect(shallow(<Title color="red" />)).toMatchSnapshot();
  });

  it('should render Title with fontSize', () => {
    expect(shallow(<Title fontSize="2" />)).toMatchSnapshot();
  });
});
