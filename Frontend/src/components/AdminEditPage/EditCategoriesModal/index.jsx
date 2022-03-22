import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../CustomModal';
import CategoriesList from './CategoriesList';
import NewCategory from './NewCategory';

const EditCategoriesModal = (props) => {
  const { className, isOpen, closeHandle, categoriesList, deleteCategory, addCategory } = props;

  return (
    <CustomModal protalClassname={className} isOpen={isOpen} closeModal={closeHandle}>
      <CategoriesList categoriesList={categoriesList} deleteCategory={deleteCategory} />
      <NewCategory addCategory={addCategory} />
    </CustomModal>
  );
};

EditCategoriesModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeHandle: PropTypes.func,
  categoriesList: PropTypes.array.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
};
export default EditCategoriesModal;
