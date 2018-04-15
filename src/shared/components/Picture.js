import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  theme: PropTypes.object,
  size: PropTypes.number,
};

export default Picture;
