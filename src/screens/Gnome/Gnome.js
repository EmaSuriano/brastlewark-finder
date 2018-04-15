import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { GET_GNOME_BY_ID } from './query';
import { Message, Spinner } from '../../shared/components';
import GnomeInformation from './components/GnomeInformation';
import GnomeModal from './components/GnomeModal';

export default class GnomeScreen extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
  };
  render() {
    const {
      match: {
        params: { id },
      },
      history,
    } = this.props;
    return (
      <GnomeModal history={history}>
        <Query query={GET_GNOME_BY_ID} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error)
              return (
                <Message color="secondary">{`Error! ${error.message}`}</Message>
              );
            return <GnomeInformation {...data.gnome} />;
          }}
        </Query>
      </GnomeModal>
    );
  }
}
