import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import Spinner from '../Spinner';

describe('<Spinner />', () => {
  it('render', () => {
    expect(shallow(<Spinner theme={theme} />)).toMatchSnapshot();
  });
});
