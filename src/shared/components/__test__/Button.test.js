import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  describe('render', () => {
    it('defaultProps', () => {
      expect(shallow(<Button />)).toMatchSnapshot();
    });

    it('with disabled', () => {
      expect(shallow(<Button disabled />)).toMatchSnapshot();
    });

    it('with onClick and enable, should call onClick on clicking', () => {
      const onClick = jest.fn();
      const button = shallow(<Button onClick={onClick} />);
      button.simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

    xit('with onClick and disable, should not call onClick on clicking', () => {
      const onClick2 = jest.fn();
      const button = shallow(<Button onClick={onClick2} disabled />);
      button.simulate('click');

      expect(onClick2).not.toHaveBeenCalled();
    });
  });
});
