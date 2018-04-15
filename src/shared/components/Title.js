import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: ${props => props.theme[props.color]};
  font-family: 'Slabo 27px', serif;
  text-align: center;
  font-size: ${props => props.fontSize}em;
`;

Title.propTypes = {
  theme: PropTypes.object.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

Title.defaultProps = {
  fontSize: '7',
  color: 'light',
};

export default Title;
