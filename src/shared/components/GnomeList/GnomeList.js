import React from 'react';
import PropTypes from 'prop-types';
import GnomeCard from './GnomeCard';
import GnomeListContainer from './GnomeListContainer';

const GnomeList = ({ gnomes }) => (
  <GnomeListContainer>
    {gnomes.map(gnome => <GnomeCard key={gnome.id} {...gnome} />)}
  </GnomeListContainer>
);

GnomeList.propTypes = {
  gnomes: PropTypes.arrayOf(PropTypes.object),
};

GnomeList.defaultProps = {
  gnomes: [],
};

export default GnomeList;
