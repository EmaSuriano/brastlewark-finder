import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemePropTypes } from 'shared/constants/theme';

const Picture = styled.img.attrs({
  atl: 'Gnome profile picture',
})`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  margin: auto;
  flex-shrink: 0;
  object-fit: cover;
  border: 1px ${props => props.theme.secondary} solid;
`;

Picture.propTypes = {
  theme: ThemePropTypes,
  size: PropTypes.number.isRequired,
};

export default Picture;
