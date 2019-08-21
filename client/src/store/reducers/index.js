import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  alert: alertReducer,
  student: studentReducer
});
