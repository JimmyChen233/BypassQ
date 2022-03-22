import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../CustomModal';
import EditorDetail from './EditorDetail/index.jsx';
import EditorImg from './EditorImg/index.jsx';

const EditorModal = (props) => {
  const { className, isOpen, closeHandle, categoriesList, modalData, setModalData, dishListHandler } = props;

  return (
    <CustomModal isOpen={isOpen} protalClassname={className} closeModal={closeHandle}>
      <EditorDetail
        setModalData={setModalData}
        modalData={modalData}
        options={categoriesList}
        submit={dishListHandler}
      />
      <EditorImg setModalData={setModalData} modalData={modalData} imgUrl={modalData.imgUrl} />
    </CustomModal>
  );
};

EditorModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeHandle: PropTypes.func,
  categoriesList: PropTypes.array.isRequired,
  modalData: PropTypes.object.isRequired,
  setModalData: PropTypes.func.isRequired,

  dishListHandler: PropTypes.func.isRequired,
};

export default EditorModal;
