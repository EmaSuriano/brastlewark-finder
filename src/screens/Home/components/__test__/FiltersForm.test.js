import React from 'react';
import { shallow } from 'enzyme';
import FiltersForm from '../FiltersForm';

describe('<FiltersForm />', () => {
  it('render', () => {
    expect(shallow(<FiltersForm />)).toMatchSnapshot();
  });
});
