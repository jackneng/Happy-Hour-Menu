import {
  GET_DISHES,
  DELETE_DISH,
  ADD_DISH,
  GET_MENUS,
  GET_RESTAURANT
} from "../actions/types.js";

const initialState = {
  dishes: [],
  restaurant: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DISHES:
      return {
        ...state,
        dishes: action.payload
      };
    case DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter(dish => dish.id !== action.payload)
      };
    case ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, action.payload]
      };
    case GET_MENUS:
      return {
        ...state,
        dishes: action.payload
      };
    case GET_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload
      };
    default:
      return state;
  }
}
