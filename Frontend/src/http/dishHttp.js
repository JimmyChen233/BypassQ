import { http } from './index';

export const allDishes = () => {
  return http('/dish', {});
};

export const addDishHttp = (dishData) => {
  return http('/dish', { method: 'POST', requestData: dishData, contentType: 'multipart/form-data' });
};

export const updateDishHttp = (dishData) => {
  return http('/dish', { method: 'PATCH', requestData: dishData, contentType: 'multipart/form-data' });
};

export const deleteDishHttp = (id) => {
  return http(`/dish/${id}`, { method: 'DELETE' });
};

export const deleteCategoryHttp = (category) => {
  return http(`/dish/categories/${category}`, { method: 'DELETE' });
};

export const addCategoryHttp = (category) => {
  return http(`/dish/categories`, { method: 'POST', requestData: { ...category } });
};
