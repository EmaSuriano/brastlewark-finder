import React from 'react';
import GnomeCard from './GnomeCard';
import GnomeListContainer from './GnomeListContainer';
import PropTypes from 'prop-types';

const GnomeList = ({ gnomes }) => (
  <GnomeListContainer>
    {gnomes.map(gnome => <GnomeCard key={gnome.id} {...gnome} />)}
  </GnomeListContainer>
);

GnomeList.propTypes = {
  gnomes: PropTypes.arrayOf(PropTypes.object),
};

export default GnomeList;
