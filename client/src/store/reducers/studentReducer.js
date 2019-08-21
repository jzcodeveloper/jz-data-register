import * as types from "../actions/types";

const initialState = {
  student: null,
  results: null,
  quickResults: [],
  loading: false
};

const setLoading = (state, loading) => {
  return { ...state, loading };
};

const setStudent = (state, student) => {
  return { ...state, student };
};

const setResults = (state, results) => {
  return { ...state, results };
};

const setQuickResults = (state, quickResults) => {
  return { ...state, quickResults };
};

const resetStudent = state => {
  return { ...state, student: null };
};

const resetResults = state => {
  return { ...state, results: null, quickResults: [] };
};

const resetQuickResults = state => {
  return { ...state, quickResults: [] };
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_STUDENT_START:
    case types.CREATE_STUDENT_START:
    case types.UPDATE_STUDENT_START:
    case types.DELETE_STUDENT_START:
    case types.FETCH_STUDENTS_RESULTS_START:
      return setLoading(state, true);

    case types.FETCH_STUDENT_END:
    case types.CREATE_STUDENT_END:
    case types.UPDATE_STUDENT_END:
    case types.DELETE_STUDENT_END:
    case types.FETCH_STUDENTS_RESULTS_END:
      return setLoading(state, false);

    case types.FETCH_STUDENT:
      return setStudent(state, payload);

    case types.RESET_STUDENT:
      return resetStudent(state);

    case types.FETCH_STUDENTS_RESULTS:
      return setResults(state, payload);

    case types.FETCH_STUDENTS_QUICK_RESULTS:
      return setQuickResults(state, payload);

    case types.RESET_RESULTS:
      return resetResults(state);

    case types.RESET_QUICK_RESULTS:
      return resetQuickResults(state);

    default:
      return state;
  }
}
