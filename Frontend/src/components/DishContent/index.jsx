import React from 'react';
import PropTypes from 'prop-types';
import DishesCard from '../DishesCard';
import '../../style/components/dishContent.scss';

const DishContent = (props) => {
  const { dishData, openModal } = props;
  return (
    <div className="dish-content">
      <h1 className="dish-content__title">Choose Dishes</h1>
      <section className="dish-content__content-wrapper">
        {dishData.map((item) => (
          <DishesCard {...item} key={item._id} openModal={openModal} />
        ))}
      </section>
    </div>
  );
};

DishContent.propTypes = {
  dishData: PropTypes.array.isRequired,
  openModal: PropTypes.func,
};

export default DishContent;
