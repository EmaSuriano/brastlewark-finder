import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import AppContainer from '../AppContainer';

describe('<AppContainer />', () => {
  it('render', () => {
    expect(shallow(<AppContainer theme={theme} />)).toMatchSnapshot();
  });
});
