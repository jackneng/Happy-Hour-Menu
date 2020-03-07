import { combineReducers } from "redux";
import dishes from "./dishes";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  dishes,
  errors,
  messages,
  auth
});
