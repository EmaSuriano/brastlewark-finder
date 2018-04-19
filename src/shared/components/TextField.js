import styled from 'styled-components';
import { ThemePropTypes } from 'shared/constants/theme';

const TextField = styled.input.attrs({
  type: 'text',
})`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.light};
  border: none;
  border-radius: 3px;
`;

TextField.propTypes = {
  theme: ThemePropTypes,
};

TextField.displayName = 'TextField';

export default TextField;
