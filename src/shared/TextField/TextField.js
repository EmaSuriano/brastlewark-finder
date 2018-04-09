import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const TextField = ({ value, onChange }) => (
  <Input
    type="text"
    onChange={({ target: { value } }) => onChange(value)}
    value={value}
  />
);

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
