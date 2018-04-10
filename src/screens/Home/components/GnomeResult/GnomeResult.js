import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GET_GNOMES } from './query';
import { Query } from 'react-apollo';

const GnomeResult = ({ criteria }) => (
  <Query query={GET_GNOMES}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          {data.allGnomes.map(gnome => <p key={gnome.id}>{gnome.id}</p>)}
        </div>
      );
    }}
  </Query>
);

GnomeResult.propTypes = {};

export default GnomeResult;
