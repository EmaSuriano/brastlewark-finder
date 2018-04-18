import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import Picture from '../Picture';

describe('<Picture />', () => {
  describe('render', () => {
    it('with size', () => {
      expect(shallow(<Picture theme={theme} size={200} />)).toMatchSnapshot();
    });
  });
});
