import createStore from "redux";
import data from "./data/productData";

const initialState = {};
const reducer = (state, action) => {
  return { products: data.products };
};
const store = createStore(reducer, initialState);
export default store;