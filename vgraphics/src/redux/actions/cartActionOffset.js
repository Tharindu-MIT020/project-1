import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty, fil, dis) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8080/offset/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.Productcode,
      discription: data.Description,
      price: data.Price,
      imageUrl: data.Imguri,
      fil,
      dis,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};