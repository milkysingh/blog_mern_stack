import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tagReducer from "./tagReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  tags: tagReducer
});
