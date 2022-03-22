import { http } from './index';

export const newOrderHttp = (order) => {
  return http('./order/new', { method: 'POST' });
};

export const myOrdersHttp = (userId) => {
  return http(`/orders/me/${userId}`, { method: 'GET' });
};

export const getAllOrdersHttp = () => {
  return http('./admin/orders', { method: 'GET' });
};

export const ordersHttp = () => {
  return http('/admin/allOrders', { method: 'GET' });
};
