import React from 'react';
import '../../style/components/loadingPage.scss';

const LoadingPage = () => (
  <section className="loadingPage">
    <div className="loadingPage__circle-container">
      <span className="loadingPage__circle loadingPage__circle--a" />
      <span className="loadingPage__circle loadingPage__circle--b" />
    </div>
  </section>
);

export default LoadingPage;
