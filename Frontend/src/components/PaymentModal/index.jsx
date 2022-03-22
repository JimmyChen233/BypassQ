import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { Button } from '@mui/material';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CircularProgress from '@mui/material/CircularProgress';
import { useCart } from '../../context/CartItemContext/cartContext';
import { useAuth } from '../../context/userContext';
import { payment } from '../../http/paymentHttp';
import '../../style/components/paymentModal.scss';
import { CARD_OPTIONS } from '../../static/paymentModalConstants';

const PaymentModal = (props) => {
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const { push } = props.history;
  const { total, cartItems, emptyCart } = useCart();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const isCartEmpty = isEmpty(cartItems);

  const handleCardInfor = async (e) => {
    e.preventDefault();

    try {
      setIsButtonDisable(true);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
      });
      if (!error) {
        const { id } = paymentMethod;
        await payment({ paymentInfo: { id, total, user, cartItems } });
        emptyCart();
        push('/user/orders');
      } else {
        setIsButtonDisable(false);
      }
    } catch (error) {
      setIsButtonDisable(false);
    }
  };

  return (
    <div className="payment-modal">
      <span className="payment-modal__title">Payment Method</span>
      <form className="payment-modal__form" onSubmit={handleCardInfor}>
        <label>Cardholder Name</label>
        <CardNumberElement options={CARD_OPTIONS} className="payment-modal__card-detail" />
        <label>Card Number</label>
        <CardExpiryElement options={CARD_OPTIONS} className="payment-modal__card-detail" />
        <label>Expiration Date</label>
        <CardCvcElement options={CARD_OPTIONS} className="payment-modal__card-detail payment-modal__card-detail--cvc" />
        <div className="payment-modal__action">
          <Link className="payment-modal__btn payment-modal__btn--cancel" to="/menu">
            Cancel
          </Link>
          <Button
            type="submit"
            className="payment-modal__btn payment-modal__btn--pay"
            disabled={isButtonDisable || isCartEmpty}
          >
            {isButtonDisable ? <CircularProgress className="payment-modal__loading" /> : 'Confirm Payment'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(PaymentModal);
