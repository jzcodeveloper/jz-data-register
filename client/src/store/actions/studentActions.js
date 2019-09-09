import axios from "../axios";
import { setSuccessAlert, setErrorAlert } from "./alertActions";
import * as types from "./types";

export const createStudent = (payload, history) => async dispatch => {
  dispatch({ type: types.CREATE_STUDENT_START });
  try {
    await axios.post(`/students/create`, payload);
    history.push("/dashboard");
    dispatch({ type: types.CREATE_STUDENT_END });
    dispatch(setSuccessAlert("Student created successfully"));
  } catch ({ response }) {
    dispatch({ type: types.CREATE_STUDENT_END });
    dispatch(setErrorAlert(response.data.message));
  }
};

export const updateStudent = (id, payload, history) => async dispatch => {
  dispatch({ type: types.UPDATE_STUDENT_START });
  try {
    await axios.put(`/students/update/${id}`, payload);
    history.push("/dashboard");
    dispatch({ type: types.UPDATE_STUDENT_END });
    dispatch(setSuccessAlert("Student updated successfully"));
  } catch ({ response }) {
    dispatch({ type: types.UPDATE_STUDENT_END });
    dispatch(setErrorAlert(response.data.message));
  }
};

export const deleteStudent = (payload, history) => async dispatch => {
  dispatch({ type: types.DELETE_STUDENT_START });
  try {
    await axios.delete(`/students/delete/${payload}`);
    history.push("/dashboard");
    dispatch({ type: types.DELETE_STUDENT_END });
    dispatch(setSuccessAlert("Student deleted successfully"));
  } catch ({ response }) {
    dispatch({ type: types.DELETE_STUDENT_END });
    dispatch(setErrorAlert(response.data.message));
  }
};

export const fetchStudent = payload => async dispatch => {
  dispatch({ type: types.FETCH_STUDENT_START });
  try {
    const { data } = await axios.get(`/students/get/${payload}`);
    dispatch({ type: types.FETCH_STUDENT, payload: data });
    dispatch({ type: types.FETCH_STUDENT_END });
  } catch (error) {
    dispatch({ type: types.FETCH_STUDENT_END });
  }
};

export const fetchStudentsResults = payload => async dispatch => {
  dispatch({ type: types.FETCH_STUDENTS_RESULTS_START });

  try {
    const { data } = await axios.get(`/students/getAll/${payload}`);
    dispatch({ type: types.FETCH_STUDENTS_RESULTS, payload: data });
    dispatch({ type: types.FETCH_STUDENTS_RESULTS_END });
  } catch (error) {
    dispatch({ type: types.FETCH_STUDENTS_RESULTS_END });
  }
};

export const fetchStudentsQuickResults = payload => async dispatch => {
  try {
    const { data } = await axios.get(`/students/getAll/${payload}`);
    dispatch({ type: types.FETCH_STUDENTS_QUICK_RESULTS, payload: data });
  } catch (error) {}
};

export const resetStudent = () => dispatch => {
  dispatch({ type: types.RESET_STUDENT });
};

export const resetResults = () => dispatch => {
  dispatch({ type: types.RESET_RESULTS });
};

export const resetQuickResults = () => dispatch => {
  dispatch({ type: types.RESET_QUICK_RESULTS });
};
