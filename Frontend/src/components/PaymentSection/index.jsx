import React from 'react';
import PropTypes from 'prop-types';

const PaymentSection = (props) => {
  const { sectionClassName, title, children } = props;

  return (
    <section className={`payment-page__${sectionClassName}`}>
      <h1 className="payment-page__title">{title}</h1>
      <main className={`payment-page__${sectionClassName}-item`}>{children}</main>
    </section>
  );
};

PaymentSection.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PaymentSection;
