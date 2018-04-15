import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.p`
  color: ${props => props.theme[props.color]};
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  font-size: ${props => props.fontSize};
`;

Message.propTypes = {
  theme: PropTypes.object,
  color: PropTypes.string,
  bold: PropTypes.bool,
  fontSize: PropTypes.string,
};

Message.defaultProps = {
  color: 'light',
  bold: false,
  fontSize: 'inherit',
};

export default Message;
