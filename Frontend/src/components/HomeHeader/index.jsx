import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useAuth } from '../../context/userContext';
import foodIcon from '../../assets/food.svg';
import accountIcon from '../../assets/account.svg';
import '../../style/components/homeHeader.scss';

const HomeHeader = (props) => {
  const { user } = useAuth();

  return (
    <header className="home-header">
      <div className="home-header__left">
        <ReactSVG src={foodIcon} className="home-header__icon" />
        <h1 className="home-header__left__title">Food Stop</h1>
      </div>
      <Link className="menu-header__right" to={isEmpty(user) ? '/auth' : '/user'}>
        <ReactSVG src={accountIcon} className="home-header__icon" />
      </Link>
    </header>
  );
};

export default HomeHeader;
