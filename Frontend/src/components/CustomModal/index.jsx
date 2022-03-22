import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../../style/components/customeModal.scss';

const CustomModal = (props) => {
  const { children, isOpen, closeModal, protalClassname } = props;
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      portalClassName={protalClassname}
      className={`modal Modal--${protalClassname}`}
      overlayClassName={`overlay Overlay--${protalClassname}`}
    >
      {children}
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  protalClassname: PropTypes.string,
  children: PropTypes.node,
};

export default CustomModal;
