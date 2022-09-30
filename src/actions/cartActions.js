import Axios from "axios";
import { CART_ADD_ITEM, CART_DELETE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`https://bitshub-api.herokuapp.com/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.product.name,
      // image: data.image,
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
