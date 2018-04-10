import styled from 'styled-components';

const Button = styled.button.attrs({
  disabled: props => props.disabled,
})`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;