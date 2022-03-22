import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewCategory = (props) => {
  const [newCategory, setNewCategory] = useState('');
  const { addCategory } = props;

  //TODO 要研究下这里放useCallBack的原因，先暂时保持不变
  const addCategoryHandler = () => {
    addCategory(newCategory);
    setNewCategory('');
  };

  return (
    <section className="new-category">
      <input
        placeholder="Category"
        className="new-category__input"
        type="text"
        value={newCategory || ''}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button className="new-category__add" onClick={addCategoryHandler}>
        Add
      </button>
    </section>
  );
};

NewCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default NewCategory;
