import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Query } from 'react-apollo';
import { GET_GNOME_BY_ID } from './query';
import { GnomeCard, Message, Spinner } from '../../shared/components';
import GnomeInformation from './components/GnomeInformation';

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
      <Modal isOpen onRequestClose={() => history.push('/')}>
        <Link to="/">Gnome {id} - Go Back</Link>
        <Query query={GET_GNOME_BY_ID} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error)
              return <Message dark>{`Error! ${error.message}`}</Message>;
            return <GnomeInformation {...data.gnome} />;
          }}
        </Query>
      </Modal>
    );
  }
}
