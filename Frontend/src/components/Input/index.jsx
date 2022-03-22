import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import '../../style/components/input.scss';

const Input = (props) => {
  const { type, name, maxLength, placeholder, icon, defaultValue, value, onChange, className, required } = props;
  const inputClasses = classNames('custom-input', className);

  const handleTextChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={inputClasses}>
      {icon && <ReactSVG className={`custom-input__icon`} src={icon} />}
      <input
        type={type}
        name={name}
        onChange={(e) => handleTextChange(e)}
        maxLength={maxLength}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
