import * as types from "../actions/types";

const initialState = {
  text: "",
  color: "",
  icon: ""
};

const setSuccessAlert = text => {
  return { text, color: "green", icon: "fas fa-check-circle" };
};

const setErrorAlert = text => {
  return { text, color: "red", icon: "fas fa-times-circle" };
};

const resetAlert = () => {
  return { text: "", color: "", icon: "" };
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_SUCCESS_ALERT:
      return setSuccessAlert(payload);

    case types.SET_ERROR_ALERT:
      return setErrorAlert(payload);

    case types.RESET_ALERT:
      return resetAlert();

    default:
      return state;
  }
}
