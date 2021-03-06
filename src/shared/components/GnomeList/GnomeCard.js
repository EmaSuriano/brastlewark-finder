import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Picture from '../Picture';
import Message from '../Message';
import ProfessionTag from '../ProfessionTag';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'picture name name'
    'picture professions professions'
    'picture professions professions';
  grid-gap: 10px;
  background: white;
  border-radius: 2px;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px ${props => props.theme.secondary}40,
    0 1px 2px ${props => props.theme.secondary}80;
  padding: 0 20px;

  &:hover {
    box-shadow: 0 14px 28px ${props => props.theme.secondary}88,
      0 10px 10px ${props => props.theme.secondary}60;
  }
`;

CardGrid.displayName = 'CardGrid';

export const GnomePicture = Picture.extend`
  grid-area: picture;
`;

GnomePicture.displayName = 'GnomePicture';

export const GnomeName = Message.extend`
  grid-area: name;
  margin-bottom: 0;
`;

GnomeName.displayName = 'GnomeName';

export const GnomeProfessions = styled.div`
  grid-area: professions;
`;

GnomeProfessions.displayName = 'GnomeProfessions';

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

StyledLink.displayName = 'StyledLink';

const MAX_PROFESSIONS = 2;

const GnomeCard = ({ id, name, thumbnail, professions }) => {
  const lessProfessions =
    professions.length > MAX_PROFESSIONS
      ? professions
          .slice(0, MAX_PROFESSIONS + 1)
          .concat(`+${professions.length - MAX_PROFESSIONS}`)
      : professions;

  return (
    <StyledLink to={`/gnome/${id}`}>
      <CardGrid>
        <GnomePicture size={70} src={thumbnail} />
        <GnomeName bold color="secondary">
          {name}
        </GnomeName>
        <GnomeProfessions>
          {lessProfessions.map(prof => (
            <ProfessionTag key={prof}>{prof}</ProfessionTag>
          ))}
        </GnomeProfessions>
      </CardGrid>
    </StyledLink>
  );
};

GnomeCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  professions: PropTypes.arrayOf(PropTypes.string),
};

GnomeCard.defaultProps = {
  professions: [],
};

export default GnomeCard;
