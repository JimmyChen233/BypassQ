import React, { createContext, useReducer, useContext } from 'react';
import { CART_REDUCER } from '../../static/reducerConstants';
import cartReduce from './cartReducer';

const CartContext = createContext();
let initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReduce, initialState);
  const { children } = props;

  const addItem = (items) => dispatch({ type: CART_REDUCER.NEW_ITEM_HANDLE, payload: items });
  const updateQuantity = (item) => dispatch({ type: CART_REDUCER.QUANTITY_HANDLE, payload: item });
  const remove = (item) => dispatch({ type: CART_REDUCER.REMOVE_ITEM_HANDLE, payload: item });
  const updateComment = (item) => dispatch({ type: CART_REDUCER.UPDATE_COMMENT_HANDLE, payload: item });
  const emptyCart = () => dispatch({ type: CART_REDUCER.EMPTY_CART, payload: {} });

  const contextValues = {
    ...state,
    addItem,
    updateQuantity,
    remove,
    updateComment,
    emptyCart,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContextProvider;
