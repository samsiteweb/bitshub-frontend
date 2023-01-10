import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_VERIFY_FAIL,
  ORDER_VERIFY_REQUEST,
  ORDER_VERIFY_SUCCESS,
} from "../constants/orderConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const CreateOrder = (order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
    payload: { order },
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post(`${BASE_URL}/api/orders`, order, {
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
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({
    type: ORDER_MINE_LIST_REQUEST,
  });

  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(`${BASE_URL}/api/orders/mine`, {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: ORDER_MINE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_MINE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
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
    const { data } = await Axios.get(`${BASE_URL}/api/orders/${orderId}`, {
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
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const verifyOrder = (reference, order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_VERIFY_REQUEST,
    payload: { reference, order },
  });
  try {
    const key = process.env.REACT_APP_PAYSTACK_KEY;
    const paystack_base_url = process.env.REACT_APP_PAYSTACK_URL;

    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(
      `${paystack_base_url}/transaction/verify/${reference}`,
      {
        headers: {
          authorization: `Bearer ${key}`,
        },
      }
    );
    try {
      const paymentResult = {
        id: data?.data?.id,
        status: data?.data?.status,
        update_time: data?.data?.paidAt,
        email_address: data?.data?.customer?.email,
      };
      const { data: updatedOrder } = await Axios.put(
        `${BASE_URL}/api/orders/${order._id}/pay`,
        paymentResult,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: ORDER_PAY_SUCCESS, payload: updatedOrder });
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem("cartItems");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_PAY_FAIL, payload: message });
    }
    dispatch({
      type: ORDER_VERIFY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_VERIFY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
