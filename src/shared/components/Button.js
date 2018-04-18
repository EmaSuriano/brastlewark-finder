import styled from 'styled-components';
import PropTypes from 'prop-types';

const DISABLED_FUNC = () => false;

const Button = styled.button.attrs({
  disabled: props => props.disabled,
  onClick: props => (props.disabled ? DISABLED_FUNC : props.onClick),
})`
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em;
  background: ${props =>
    props.disabled ? props.theme.disabled : props.theme.accent};
  border-radius: 3px;
  border: none;
  color: ${props =>
    props.disabled ? props.theme.secondary : props.theme.light};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onClick: DISABLED_FUNC,
};

export default Button;
