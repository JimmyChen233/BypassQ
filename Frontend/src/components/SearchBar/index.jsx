import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import searchIcon from '../../assets/searchFood.svg';
import '../../style/components/searchBar.scss';

const SearchBar = (props) => {
  const { placeHolder, className } = props;

  return (
    <div className={`input input--${className}`}>
      <input placeholder={placeHolder} />
      <ReactSVG className="input__icon" src={searchIcon} />
    </div>
  );
};

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};
export default SearchBar;
