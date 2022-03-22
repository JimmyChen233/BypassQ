import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import trashinIcon from '../../../assets/trashbin.svg';
import appleIcon from '../../../assets/apple.jpg';

const Item = (props) => {
  const { name, quantity, price } = props;

  return (
    <div className="payment-page__item">
      <section className="payment-page__item-detail">
        <div className="payment-page__item-img">
          <img src={appleIcon} alt="apple" />
        </div>
        <div className="payment-page__item-desc">
          <span>{name}</span>
          <span>{`$${price}`}</span>
        </div>
      </section>
      <section className="payment-page__item-action">
        <input className="payment-page__item-amount" defaultValue={quantity} />
        <span>{`$${price}`}</span>
        <button className="payment-page__item-remove">
          <ReactSVG src={trashinIcon} />
        </button>
      </section>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
