import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: ${props => props.color};
  text-align: center;
  margin: 1em 0;
`;

Title.propTypes = {
  color: PropTypes.string,
};

Title.defaultProps = {
  color: 'white',
};

export default Title;
