import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemePropTypes } from 'shared/constants/theme';

const Message = styled.p`
  color: ${props => props.theme[props.color]};
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  font-size: ${props => props.fontSize};
`;

Message.propTypes = {
  theme: ThemePropTypes,
  color: PropTypes.string,
  bold: PropTypes.bool,
  fontSize: PropTypes.string,
};

Message.defaultProps = {
  color: 'light',
  bold: false,
  fontSize: 'inherit',
};

Message.displayName = 'Message';

export default Message;
