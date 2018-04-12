import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.light};
  border: none;
  border-radius: 3px;
`;

const TextField = ({ onChange, ...rest }) => (
  <Input
    type="text"
    onChange={({ target: { value } }) => onChange(value)}
    {...rest}
  />
);

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
