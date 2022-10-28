import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_VERIFY_FAIL,
  ORDER_VERIFY_REQUEST,
  ORDER_VERIFY_SUCCESS,
} from "../constants/orderConstants";

export const CreateOrder = (order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
    payload: { order },
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post("https://bitshub-api.herokuapp.com/api/orders", order, {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data.order,
    });
    // dispatch({
    //   type: CART_EMPTY,
    // });
    // localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_DETAILS_REQUEST,
    payload: { orderId },
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(`https://bitshub-api.herokuapp.com/api/orders/${orderId}`, {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// export const updateOrder = (order, paymentResult) => async (dispatch, getState) => {
//   dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = Axios.put(`https://bitshub-api.herokuapp.com/api/orders/${order._id}/pay`, paymentResult, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
//   } catch (error) {
//     const message = error.response && error.response.data.message ? error.response.data.message : error.message;
//     dispatch({ type: ORDER_PAY_FAIL, payload: message });
//   }
// };

export const verifyOrder = (reference, order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_VERIFY_REQUEST,
    payload: { reference, order },
  });
  try {
    // const key = process.env.PAYMENT_KEY;
    const key = "sk_test_f4da1d8a7f018be7eeab71a3a7bd19f36107469a";
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        authorization: `Bearer ${key}`,
      },
    });
    try {
      const paymentResult = {
        id: data?.data?.id,
        status: data?.data?.status,
        update_time: data?.data?.paidAt,
        email_address: data?.data?.customer?.email,
      };
      const { data: updatedOrder } = await Axios.put(
        `https://bitshub-api.herokuapp.com/api/orders/${order._id}/pay`,
        paymentResult,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: ORDER_PAY_SUCCESS, payload: updatedOrder });
      dispatch({ type: CART_EMPTY });
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      dispatch({ type: ORDER_PAY_FAIL, payload: message });
    }
    dispatch({
      type: ORDER_VERIFY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_VERIFY_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
