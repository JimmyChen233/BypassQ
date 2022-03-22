import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { ReactSVG } from 'react-svg';
import addToCartIcon from '../../assets/addCart.svg';

const DishesCard = (props) => {
  const { name, price, openModal, _id, url } = props;

  const openDishModal = () => {
    openModal({ _id, name, price: Number(price), imgUrl: url });
  };
  return (
    <div className="dish-content__dish">
      <header className="dish-content__dish-img">
        <img src={url} alt="logo" />
      </header>
      <main className="dish-content__dish-detail">
        <span className="dish-content__dish-desc">{name}</span>
        <span className="dish-content__dish-price">{`$${price}`}</span>
        <Button className="dish-content__add--cart" onClick={openDishModal}>
          <ReactSVG src={addToCartIcon} />
        </Button>
      </main>
    </div>
  );
};

DishesCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  openModal: PropTypes.func,
  _id: PropTypes.string,
  url: PropTypes.string,
};

export default DishesCard;
