import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import NewDish from '../NewDish';
import DishEditor from '../DishEditor';

const EditorWrapper = (props) => {
  const { dishData, modalHandler, categories, deleteItem } = props;

  return (
    <PerfectScrollbar>
      <section className="edit-page__editor-wrapper">
        <NewDish modalHandler={modalHandler} categories={categories} />
        {dishData.map((dish) => (
          <DishEditor
            {...dish}
            key={dish._id}
            categories={categories}
            modalHandler={modalHandler}
            deleteItem={deleteItem}
          />
        ))}
      </section>
    </PerfectScrollbar>
  );
};

EditorWrapper.propTypes = {
  categories: PropTypes.string.isRequired,
  dishData: PropTypes.array.isRequired,
  modalHandler: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default EditorWrapper;
