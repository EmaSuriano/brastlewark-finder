import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ExitButton = styled(Link)`
  float: right;
`;

const GnomeModal = ({ history, children }) => (
  <Modal isOpen onRequestClose={() => history.push('/')}>
    <ExitButton to="/">╳</ExitButton>
    {children}
  </Modal>
);

export default GnomeModal;
