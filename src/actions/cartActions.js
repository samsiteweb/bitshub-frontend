import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://localhost:4000";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`${BASE_URL}/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.product.name,
      image: data.product.image,
      price: data.product.price,
      quantityInStock: data.product.quantityInStock,
      condition: data.product.condition,
      product: data.product._id,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const itemRemove = (productId) => async (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: productId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingDetails", JSON.stringify(data));
};
export const savePaymentMethod = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
};
