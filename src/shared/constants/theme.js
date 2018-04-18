import PropTypes from 'prop-types';

export const ThemePropTypes = PropTypes.shape({
  background: PropTypes.string,
  light: PropTypes.string,
  disabled: PropTypes.string,
  accent: PropTypes.string,
  secondary: PropTypes.string,
}).isRequired;

export default {
  background: '#4F5D75',
  light: '#FFFFFF',
  disabled: '#BFC0C0',
  accent: '#EF8354',
  secondary: '#2D3142',
};
