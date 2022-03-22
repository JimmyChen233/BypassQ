import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import CustomModal from '../CustomModal';
import { useCart } from '../../context/CartItemContext/cartContext';

const DishModal = (props) => {
  const { className, isOpen, closeHandle, modalData } = props;
  const [quantity, setQuantity] = useState(1);
  const { price, imgUrl } = modalData;
  const { addItem } = useCart();
  const isDecreaseBtnDisabled = quantity <= 1;
  const isAddCartBtnDisabled = !quantity;

  const decreaseClasses = classNames('dish-wrapper__btn', 'dish-wrapper__btn--decrease', {
    'dish-wrapper__btn--decrease__disabled': quantity <= 1,
  });

  const handleModal = () => {
    setQuantity(1);
    closeHandle();
  };

  const addToCart = () => {
    setQuantity(1);
    addItem({ ...modalData, quantity, singleTotal: quantity * price });
    closeHandle();
  };

  return (
    <CustomModal isOpen={isOpen} protalClassname={className} closeModal={handleModal}>
      <section className="dish-wrapper">
        <div className="dish-wrapper__img">
          <img src={imgUrl} alt="apple" />
        </div>
        <div className="dish-wrapper__action">
          <div className="dish-wrapper__modify">
            <Button
              className={decreaseClasses}
              onClick={() => setQuantity(quantity - 1)}
              disabled={isDecreaseBtnDisabled}
            >
              -
            </Button>

            <span className="dish-wrapper__quantity">{quantity}</span>

            <Button className="dish-wrapper__btn dish-wrapper__btn--increase" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>
          <Button
            className="dish-wrapper__btn dish-wrapper__btn--add"
            onClick={addToCart}
            disabled={isAddCartBtnDisabled}
          >
            Add to cart
          </Button>
        </div>
      </section>
    </CustomModal>
  );
};

DishModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeHandle: PropTypes.func,
  modalData: PropTypes.object.isRequired,
};

export default DishModal;
