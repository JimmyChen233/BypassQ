import React, { useState } from 'react';
import MenuHeader from '../components/MenuHeader';
import TabContext from '../components/TabContext';
import DishContent from '../components/DishContent';
import DishModal from '../components/DishModal';
import Cart from '../components/OpenCart/Cart';
import { useDishList } from '../hooks';
import '../style/pages/menuPage.scss';

const MenuPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { dishList } = useDishList();

  const modalHandle = (dishData) => {
    setIsModalOpen(!isModalOpen);
    setModalData({ ...dishData });
  };

  const handleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  const panelContent = dishList.map((list, index) => ({
    index,
    categories: list.categories,
    children: <DishContent key={list.categories} dishData={list.dishes} openModal={modalHandle} />,
  }));

  return (
    <div className="menu-page">
      <MenuHeader cartHandle={handleCartModal} />
      <TabContext panelData={panelContent} />
      <DishModal className="dish-modal" isOpen={isModalOpen} closeHandle={modalHandle} modalData={modalData} />
      <Cart isCartOpen={isCartOpen} handleCloseCart={handleCartModal} />
    </div>
  );
};

export default MenuPage;
