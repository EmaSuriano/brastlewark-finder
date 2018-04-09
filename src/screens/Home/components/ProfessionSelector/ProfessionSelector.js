import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';
import professions from './professions';
import 'react-select/dist/react-select.css';

const options = professions.map(profession => ({
  value: profession,
  label: profession,
}));

const StyledSelect = styled(Select)`
  min-width: 15em;
  max-width: 20em;
`;

const ProfessionSelector = ({ onChange, selected }) => (
  <StyledSelect
    onChange={values => onChange(values.map(({ value }) => value))}
    value={selected}
    placeholder="Select professions"
    multi
    options={options}
  />
);

ProfessionSelector.propTypes = {
  onChange: PropTypes.func,
};

export default ProfessionSelector;
