import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      quantityInStock: data.quantityInStock,
      condition: data.condition,
      product: data.id,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
// export const updateAmountProduct = (id, type, quantity) => async (dispatch, getState) => {
//   dispatch({
//     type: ITEM_INCREMENT,
//     payload: {
//       type: type,
//       product: id,
//       qty: quantity,
//     },
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };
