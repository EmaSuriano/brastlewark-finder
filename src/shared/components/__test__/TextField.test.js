import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import TextField from '../TextField';

describe('<TextField />', () => {
  it('render', () => {
    expect(shallow(<TextField theme={theme} />)).toMatchSnapshot();
  });
});
