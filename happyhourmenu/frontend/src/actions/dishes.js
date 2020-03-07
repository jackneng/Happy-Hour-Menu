import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_DISHES,
  DELETE_DISH,
  ADD_DISH,
  GET_MENUS,
  GET_RESTAURANT
} from "./types";

// GET DISH
export const getDishes = () => (dispatch, getState) => {
  axios
    .get("/api/dishes/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DISHES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response, status))
    );
};

// DELETE DISH
export const deleteDish = id => (dispatch, getState) => {
  axios
    .delete(`/api/dishes/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteDish: "Dish Deleted" }));
      dispatch({
        type: DELETE_DISH,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD DISH
export const addDish = dish => (dispatch, getState) => {
  axios
    .post("/api/dishes/", dish, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addDish: "Dish Added" }));
      dispatch({
        type: ADD_DISH,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response, status))
    );
};

// GET MENU
export const getMenus = () => dispatch => {
  axios
    .get("/api/menus")
    .then(res => {
      dispatch({
        type: GET_MENUS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response, status))
    );
};

// GET RESTAURANT
export const getRestaurant = () => dispatch => {
  axios
    .get("/api/restaurant")
    .then(res => {
      dispatch({
        type: GET_RESTAURANT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response, status))
    );
};
