import React from 'react';
import styled from 'styled-components';
import ProfessionTag from '../../../shared/components/ProfessionTag';
import { GnomeCard } from '../../../shared/components';

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
  <div>
    <h2>{name}</h2>
    <img src={thumbnail} />
    <p>Age {age}</p>
    <p>weight {weight}</p>
    <p>height {height}</p>
    <b>hair_color {hair_color}</b>
    {professions &&
      professions.map(prof => <ProfessionTag>{prof}</ProfessionTag>)}
    <div>
      <h3>Friends</h3>
      {friends && friends.map(friend => <GnomeCard {...friend} />)}
    </div>
  </div>
);

export default GnomeInformation;
