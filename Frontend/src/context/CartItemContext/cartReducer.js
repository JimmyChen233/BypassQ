import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import remove from 'lodash/remove';
import { CART_REDUCER } from '../../static/reducerConstants';

const cartReduce = (state, action) => {
  const { type, payload } = action;
  const { cartItems } = state;
  let { _id, quantity, method, comment } = payload;

  switch (type) {
    case CART_REDUCER.NEW_ITEM_HANDLE:
      const result = findIndex(cartItems, (item) => item._id === _id);
      result === -1
        ? cartItems.push({ ...payload })
        : (find(cartItems, (item) => item['_id'] === _id).quantity += quantity);
      break;

    case CART_REDUCER.QUANTITY_HANDLE:
      const items = find(cartItems, (item) => item._id === _id);
      if (method === 'increase') {
        items['quantity'] += 1;
      } else if (method === 'decrease') {
        items['quantity'] -= 1;
      }
      items.singleTotal = items.quantity * items.price;

      break;

    case CART_REDUCER.REMOVE_ITEM_HANDLE:
      remove(cartItems, (item) => item._id === _id);
      break;

    case CART_REDUCER.UPDATE_COMMENT_HANDLE:
      find(cartItems, (item) => item._id === _id).comment = comment;
      break;
    case CART_REDUCER.EMPTY_CART:
      cartItems.length = 0;
      break;
    default:
  }
  return {
    ...state,
    cartItems: [...cartItems],
    itemCount: [...cartItems].length,
    total: [...cartItems].reduce((pre, cur) => pre + cur.quantity * cur.price, 0),
  };
};

export default cartReduce;
