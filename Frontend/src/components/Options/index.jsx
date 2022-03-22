import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import '../../style/components/optionTab.scss';

const OptionTab = (props) => {
  const { className, options, dishCategory, modalData, setModalData } = props;
  const optionClasses = classNames('option-wrapper', className);
  const newItem = isEmpty(dishCategory);

  const show = (e) => {
    setModalData({
      ...modalData,
      categories: e.target.value,
    });
  };

  return (
    <select className={optionClasses} value={dishCategory} disabled={!newItem} onChange={show}>
      <option value="">Type</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

OptionTab.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  dishCategory: PropTypes.string.isRequired,
  modalData: PropTypes.object,
  setModalData: PropTypes.func,
};

export default OptionTab;
