import React from 'react';
import { shallow } from 'enzyme';
import theme from 'shared/constants/theme';
import Message from '../Message';

describe('<Message />', () => {
  describe('render', () => {
    it('default props', () => {
      expect(shallow(<Message theme={theme} />)).toMatchSnapshot();
    });

    it('with color', () => {
      expect(
        shallow(<Message color="accent" theme={theme} />),
      ).toMatchSnapshot();
    });

    it('with bold', () => {
      expect(shallow(<Message bold theme={theme} />)).toMatchSnapshot();
    });

    it('with fontSize', () => {
      expect(
        shallow(<Message fontSize="12em" theme={theme} />),
      ).toMatchSnapshot();
    });
  });
});
