import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import addIcon from '../../../assets/add.svg';

const NewDish = (props) => {
  const { modalHandler, categories } = props;

  return (
    <div className="edit-page__new-dish" onClick={() => modalHandler({ type: 'newItem', categories })}>
      <span className="edit-page__add-btn">
        <ReactSVG className="edit-page__add-btn-icon" src={addIcon} />
        <span>Add new dish</span>
      </span>
    </div>
  );
};

NewDish.propTypes = {
  modalHandler: PropTypes.func.isRequired,
  categories: PropTypes.string.isRequired,
};
export default NewDish;
