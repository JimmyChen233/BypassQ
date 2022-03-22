import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import editCategoryIcon from '../../../assets/editCategory.svg';

const AdminEditHeader = (props) => {
  const { editCategoriesModalHandler } = props;

  return (
    <header className="edit-page__sub-header">
      <span className="edit-page__sub-title">Products Management</span>
      <span className="edit-page__edit-category" onClick={editCategoriesModalHandler}>
        <ReactSVG src={editCategoryIcon} />
        <span>Manage Categories</span>
      </span>
    </header>
  );
};

AdminEditHeader.propTypes = {
  editCategoriesModalHandler: PropTypes.func,
};

export default AdminEditHeader;
