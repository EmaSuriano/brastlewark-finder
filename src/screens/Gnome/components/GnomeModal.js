import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ExitButton = styled(Link)`
  float: right;
`;

const GnomeModal = ({ history, children }) => (
  <Modal
    isOpen
    onRequestClose={() => history.push('/')}
    style={{
      content: {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '80%',
        maxWidth: '60rem',
      },
    }}
  >
    <ExitButton to="/">╳</ExitButton>
    {children}
  </Modal>
);

export default GnomeModal;
