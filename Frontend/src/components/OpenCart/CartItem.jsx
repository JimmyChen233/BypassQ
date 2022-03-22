import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

import '../../style/components/openCart.scss';
import deleteIcon from '../../assets/delete-fill.svg';
import { useCart } from '../../context/CartItemContext/cartContext';

export const CartItem = React.memo((props) => {
  const { updateQuantity, remove } = useCart();
  const { cartItem } = props;
  const { name, price, quantity, imgUrl } = cartItem;
  const isBtnDisabled = quantity <= 1;

  return (
    <div className="item-card">
      <section className="item-card__desc">
        <div className="item-card__item-img">
          <img src={imgUrl} alt={name} />
        </div>
        <span className="item-card__dish-name">{name}</span>
        <span className="item-card__dish-price">{`$ ${price}`}</span>
      </section>
      <section className="item-card__action">
        <div className="item-card__modification">
          <Button className="item-card__amount" onClick={() => updateQuantity({ ...cartItem, method: 'increase' })}>
            +
          </Button>
          <span>{quantity}</span>
          <Button
            className="item-card__amount"
            onClick={() => updateQuantity({ ...cartItem, method: 'decrease' })}
            disabled={isBtnDisabled}
          >
            -
          </Button>
        </div>
        <Button onClick={() => remove({ ...cartItem })}>
          <ReactSVG src={deleteIcon} className="item-card__delete--icon" />
        </Button>
      </section>
    </div>
  );
});

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    comment: PropTypes.string,
    singleTotal: PropTypes.number,
  }).isRequired,
};
