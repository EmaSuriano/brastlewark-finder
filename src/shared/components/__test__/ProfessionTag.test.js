import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import ProfessionTag from '../ProfessionTag';

describe('<ProfessionTag />', () => {
  it('render', () => {
    expect(shallow(<ProfessionTag theme={theme} />)).toMatchSnapshot();
  });
});
