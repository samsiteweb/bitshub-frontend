import { CART_ADD_ITEM, CART_UPDATE_ITEM, ITEM_INCREMENT, ITEM_DECREMENT } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    // case ITEM_INCREMENT:
    //   const updateItem = action.payload;
    //   if (updateItem.qty <= 0) {
    //     updateItem.qty = 1;
    //   }
    //   const itemExists = state.cartItems.find((p) => p.product === updateItem.product);
    //   if (itemExists) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
    //     };
    //   } else {
    //     return { ...state, cartItems: [...state.cartItems, item] };
    //   }
    //   // const currentProduct = state.cartItems[index];
    //   // return {
    //   //   ...state,
    //   //   cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
    //   // };

    default:
      return state;
  }
};

// export const cartUpdateReducer = (state = { cartItems: [] }, action) => {
//   switch (action.type) {
//     case CART_UPDATE_ITEM:
//       const updateItem = action.payload;
//       if (updateItem.qty <= 0) {
//         updateItem.qty = 1;
//       }
//       const index = state.cartItems.findIndex((p) => p.product === updateItem.product);
//       const currentProduct = state.cartItems[index];
//       if (updateItem.type === "up") {
//         console.log(currentProduct.qty);
//         currentProduct.qty += 1;
//         state.total += currentProduct.price;
//       }
//       if (updateItem.type === "down" && state.cartItems[index].qty > 1) {
//         currentProduct.qty -= 1;
//         state.total += currentProduct.price;
//       }
//       if (updateItem.type === "updateQuantity") {
//         if (currentProduct.qty > updateItem.qty) {
//           state.total -= (currentProduct.qty - updateItem.qty) * currentProduct.price;
//         } else {
//           state.total += updateItem.qty - currentProduct.qty * currentProduct.price;
//         }
//         currentProduct.qty = updateItem.qty;
//       }
//       break;
//     default:
//       return state;
//   }
// };
