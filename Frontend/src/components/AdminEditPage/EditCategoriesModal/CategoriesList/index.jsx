import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import deleteCategoryIcon from '../../../../assets/deleteCategory.svg';

const CategoriesList = (props) => {
  const { categoriesList, deleteCategory } = props;
  return (
    <PerfectScrollbar className="categories-list">
      {categoriesList.length ? (
        categoriesList.map((category) => (
          <div className="categories-list__category" key={category}>
            <span>{category}</span>
            <ReactSVG
              className="categories-list__icon"
              src={deleteCategoryIcon}
              onClick={() => deleteCategory(category)}
            />
          </div>
        ))
      ) : (
        <p className="categories-list__empty">You currently have no category.<br/> Start to creat your first category</p>
      )}
    </PerfectScrollbar>
  );
};

CategoriesList.propTypes = {
  categoriesList: PropTypes.array.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
