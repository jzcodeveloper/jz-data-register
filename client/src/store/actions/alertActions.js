import * as types from "./types";

export const setSuccessAlert = payload => ({
  type: types.SET_SUCCESS_ALERT,
  payload
});

export const setErrorAlert = payload => ({
  type: types.SET_ERROR_ALERT,
  payload
});

export const resetAlert = () => ({ type: types.RESET_ALERT });
