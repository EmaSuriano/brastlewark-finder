import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

const ExitButton = styled(Link)`
  float: right;
`;

ExitButton.displayName = 'ExitButton  ';

const GnomeModal = ({ history, children }) => (
  <Modal isOpen onRequestClose={() => history.push('/')}>
    <ExitButton to="/">╳</ExitButton>
    {children}
  </Modal>
);

GnomeModal.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  children: PropTypes.node.isRequired,
};

export default GnomeModal;
