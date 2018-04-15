import React from 'react';
import styled from 'styled-components';
import ProfessionTag from '../../../shared/components/ProfessionTag';
import { GnomeList, Picture, Title, Message } from '../../../shared/components';
import PropTypes from 'prop-types';

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2em;
  grid-template-areas:
    'title title title'
    'picture detail professions'
    'friend friend friend';
`;

const GnomeTitle = Title.extend`
  grid-area: title;
`;

const GnomePicture = Picture.extend`
  grid-area: picture;
`;

const GnomeDetail = styled.div`
  grid-area: detail;
`;

const GnomeProfessions = styled.div`
  grid-area: professions;
`;

const GnomeFriends = styled.div`
  grid-area: friend;
`;

const GnomeAttribute = styled('li')`
  margin-bottom: 1em;
`;

const GnomeResultContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  padding-bottom: 30px; // end of the result
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 160px;
  justify-self: stretch;
  align-content: center;
`;

const GnomeInformation = ({
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions,
  friends,
}) => (
  <ModalGrid>
    <GnomeTitle fontSize="3" color="secondary">
      {name}
    </GnomeTitle>
    <GnomePicture size="200" src={thumbnail} />
    <GnomeDetail>
      <Message color="secondary" fontSize="1.5em" bold>
        Gnome Detail
      </Message>
      <ul>
        <GnomeAttribute>
          <b>Age: </b>
          {age}
        </GnomeAttribute>
        <GnomeAttribute>
          <b>Weight: </b>
          {Number(weight).toFixed(2)}
        </GnomeAttribute>
        <GnomeAttribute>
          <b>Height: </b>
          {Number(height).toFixed(2)}
        </GnomeAttribute>
        <GnomeAttribute>
          <b>Hair Color: </b>
          {hair_color}
        </GnomeAttribute>
      </ul>
    </GnomeDetail>
    <GnomeProfessions>
      <Message color="secondary" fontSize="1.5em" bold>
        Professions
      </Message>
      {professions.length ? (
        professions.map(prof => <ProfessionTag>{prof}</ProfessionTag>)
      ) : (
        <Message color="secondary">
          This gnome doesn't have any professions ...
        </Message>
      )}
    </GnomeProfessions>
    <GnomeFriends>
      <Message color="secondary" fontSize="1.5em" bold>
        Friends
      </Message>
      {friends.length ? (
        <GnomeList gnomes={friends} />
      ) : (
        <Message color="secondary">This gnome doesn't have friends :(</Message>
      )}
    </GnomeFriends>
  </ModalGrid>
);

GnomeInformation.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hair_color: PropTypes.string.isRequired,
  professions: PropTypes.arrayOf(PropTypes.string),
  friends: PropTypes.arrayOf(PropTypes.object),
};

GnomeInformation.defaultProps = {
  friends: [],
  professions: [],
};

export default GnomeInformation;
