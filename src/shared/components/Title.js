import styled from 'styled-components';
import { ThemePropTypes } from 'shared/constants/theme';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: ${props => props.theme[props.color]};
  font-family: 'Slabo 27px', serif;
  text-align: center;
  font-size: ${props => props.fontSize}em;
`;

Title.propTypes = {
  theme: ThemePropTypes,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

Title.defaultProps = {
  fontSize: '7',
  color: 'light',
};

Title.displayName = 'Title';

export default Title;
