import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import Title from '../Title';

describe('<Title />', () => {
  it('should render Title with defaultValues', () => {
    expect(shallow(<Title theme={theme} />)).toMatchSnapshot();
  });

  it('should render Title with red color', () => {
    expect(shallow(<Title color="accent" theme={theme} />)).toMatchSnapshot();
  });

  it('should render Title with fontSize', () => {
    expect(shallow(<Title fontSize="2" theme={theme} />)).toMatchSnapshot();
  });
});
