import { useEffect, useState } from 'react';
import { allDishes } from '../http/dishHttp';

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, [callback]);
};

export const useDishList = () => {
  const [dishList, setDishList] = useState([]);
  const [dishCategories, setDishCategories] = useState([]);

  useEffect(() => {
    initFetch();
  }, []);

  useEffect(() => {
    setDishCategories(dishList.map((dish) => dish.categories));
  }, [dishList]);

  const initFetch = async () => {
    const { data } = await allDishes();
    setDishCategories(data.map((dish) => dish.categories));
    setDishList(data);
  };

  return { dishList, dishCategories, setDishList, setDishCategories };
};
