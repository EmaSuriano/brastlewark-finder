import React from 'react';
import styled from 'styled-components';
import ProfessionTag from './ProfessionTag';

const GnomeContainer = styled.div`
  background: white;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  padding: 0 20px;
`;

const GnomePicture = styled.img.attrs({
  atl: 'Gnome profile picture',
})`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  flex-shrink: 0;
  object-fit: cover;
  border: 1px ${props => props.theme.secondary} solid;
`;

const GnomeInformation = styled.span`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-left: 10px;
`;

const GnomeName = styled.h4`
  margin: 10px 0;
`;

const MAX_PROFESSIONS = 2;

const GnomeCard = ({ id, name, thumbnail, professions }) => {
  const lessProfessions =
    professions.length > MAX_PROFESSIONS
      ? professions
          .slice(0, MAX_PROFESSIONS + 1)
          .concat(`+${professions.length - MAX_PROFESSIONS}`)
      : professions;

  return (
    <GnomeContainer>
      <GnomePicture src={thumbnail} />
      <GnomeInformation>
        <GnomeName>{name}</GnomeName>
        <div>
          {lessProfessions.map(prof => (
            <ProfessionTag key={prof}>{prof}</ProfessionTag>
          ))}
        </div>
      </GnomeInformation>
    </GnomeContainer>
  );
};

export default GnomeCard;
