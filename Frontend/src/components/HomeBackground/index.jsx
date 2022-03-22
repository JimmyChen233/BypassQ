import React from 'react';
import '../../style/components/homeBackground.scss';
import dishIcon from '../../assets/dish.jpg';

const HomeBackground = (props) => {
  return (
    <div className="home-background">
      <div className="home-background__ellipse" />
      <img src={dishIcon} alt="logo" className="home-background__dish" />
      <img src={dishIcon} alt="logo" className="home-background__breakfast" />
      <img src={dishIcon} alt="logo" className="home-background__brunch" />
      <img src={dishIcon} alt="logo" className="home-background__lunch" />
      <img src={dishIcon} alt="logo" className="home-background__dinner" />
      <img src={dishIcon} alt="logo" className="home-background__snack" />
    </div>
  );
};

export default HomeBackground;
