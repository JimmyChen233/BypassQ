import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import addIcon from '../../../assets/add.svg';

const EmptyCategory = (props) => {
    const { editCategoriesModalHandler } = props;

    return (
        <div className="edit-page__add-category" onClick={editCategoriesModalHandler}>
          <span className="edit-page__add-btn">
            <ReactSVG className="edit-page__add-btn-icon" src={addIcon} />
            <span>Add new Category</span>
          </span>
      </div>
    )
}

EmptyCategory.propTypes = {
    editCategoriesModalHandler: PropTypes.func,
}

export default EmptyCategory
