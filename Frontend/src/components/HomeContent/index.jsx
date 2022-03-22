import React from 'react';
import '../../style/components/homeContent.scss';
import { Link } from 'react-router-dom';
const HomeContent = (props) => {
  return (
    <div className="home-content">
      <h1 className="home-content__title">Delicious.</h1>
      <h2 className="home-content__slogan">One stop destination</h2>
      <p className="home-content__description">Hunger pangs? You’re at the right stop to drive it away!</p>
      <p className="home-content__description">
        Order delicious food or reserve a table at your next cafe from the comfort of your home!
      </p>
      <div className="home-content__bottom">
        <h3 className="home-content__bottom__slogan">One stop, Many routes</h3>
        <Link className="home-content__bottom__order" to="/menu">
          Order now!
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
