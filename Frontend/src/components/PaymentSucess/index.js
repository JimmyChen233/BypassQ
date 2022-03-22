import React from 'react';
import '../../style/components/paymentSucess.scss';

const PaymentSucess = (props) => {
  return (
    <div className="payment-success">
      <div className="payment-success__container">
        <h1 className="payment-success__container__title">Payment Sucessful</h1>
        <a className="payment-success__container__back" href=" ">
          Back
        </a>
      </div>
    </div>
  );
};

export default PaymentSucess;
