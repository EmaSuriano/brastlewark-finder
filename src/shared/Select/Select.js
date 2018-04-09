import React from 'react';
import ReactSelect from 'react-select';

const Select = ({ value, onChange }) => (
  <ReactSelect
    name="form-field-name"
    value={value}
    onChange={onChange}
    options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  />
);
