import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.p`
  margin-top: 2em;
  color: ${props => (props.dark ? props.theme.secondary : props.theme.light)};
`;

Message.propTypes = {
  dark: PropTypes.bool,
};

Message.propTypes = {
  dark: false,
};

export default Message;
