import React from 'react';
import { Query } from 'react-apollo';
import ReactRouterPropTypes from 'react-router-prop-types';
import { GET_GNOME_BY_ID } from './query';
import { Message, Spinner } from '../../shared/components';
import GnomeInformation from './components/GnomeInformation';
import GnomeModal from './components/GnomeModal';

const GnomeScreen = ({
  match: {
    params: { id },
  },
  history,
}) => (
  <GnomeModal history={history}>
    <Query query={GET_GNOME_BY_ID} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) {
          return (
            <Message color="secondary">{`Error! ${error.message}`}</Message>
          );
        }
        return <GnomeInformation {...data.gnome} />;
      }}
    </Query>
  </GnomeModal>
);

GnomeScreen.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default GnomeScreen;
