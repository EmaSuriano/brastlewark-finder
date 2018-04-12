import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';
import professions from './professions';

const options = professions.map(profession => ({
  value: profession,
  label: profession,
}));

const StyledSelect = styled(Select)`
  min-width: 15em;
  max-width: 20em;

  .Select-value {
    background-color: ${props => props.theme.accent}1A !important;
    border: 1px solid ${props => props.theme.accent}40 !important;
    color: ${props => props.theme.secondary} !important;
  }
  .Select-value-icon {
    border-right: 1px solid ${props => props.theme.accent}40 !important;

    &:hover {
      background-color: ${props => props.theme.accent}1A !important;
      color: ${props => props.theme.secondary} !important;
    }
  }

  .Select-option.is-focused {
    background-color: ${props => props.theme.accent}1A !important
    color: ${props => props.theme.secondary} !important;
  }
`;

const ProfessionSelector = ({ onChange, selected }) => (
  <StyledSelect
    onChange={values => onChange(values.map(({ value }) => value))}
    value={selected}
    placeholder="Select professions"
    multi
    closeOnSelect={false}
    options={options}
  />
);

ProfessionSelector.propTypes = {
  onChange: PropTypes.func,
};

export default ProfessionSelector;
