import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentSection from '../components/PaymentSection';
import PaymentModal from '../components/PaymentModal';
import ItemList from '../components/PaymentSection/ItemList';
import '../style/pages/paymentPage.scss';

import { useCart } from '../context/CartItemContext/cartContext';

const stripeTestPromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PaymentPage = () => {
  const { cartItems, total } = useCart();

  return (
    <div className="payment-page">
      <PaymentSection sectionClassName={'payment'} title="Payment">
        <Elements stripe={stripeTestPromise}>
          <PaymentModal />
        </Elements>
      </PaymentSection>
      <PaymentSection sectionClassName={'confirmation'} title="">
        <ItemList order={cartItems} total={total} />
      </PaymentSection>
    </div>
  );
};

export default PaymentPage;
