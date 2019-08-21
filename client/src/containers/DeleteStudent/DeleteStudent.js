import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./DeleteStudent.css";

import {
  fetchStudent,
  deleteStudent,
  resetStudent
} from "../../store/actions/studentActions";

import Confirmation from "../../components/UI/Confirmation/Confirmation";
import Spinner from "../../components/UI/Spinner/Spinner";
import Form from "../../components/App/Form/Form";

const DeleteStudent = ({ history }) => {
  const dispatch = useDispatch();

  const { student, loading } = useSelector(({ student }) => student);

  const [state, setState] = useState({ name: "", showConfirmation: false });

  const { name, showConfirmation } = state;

  useEffect(() => {
    document.title = `JZ Data Register - Delete Student`;
    const [, , name] = window.location.pathname.split("/");
    dispatch(fetchStudent(name));
    setState({ ...state, name });
    return () => dispatch(resetStudent());
  }, []);

  const onShowConfirmation = e => {
    e.preventDefault();
    setState({ ...state, showConfirmation: true });
  };

  const onCloseConfirmation = () => {
    setState({ ...state, showConfirmation: false });
  };

  const onDeleteStudent = () => {
    dispatch(deleteStudent(student._id, history));
  };

  return (
    <div className={classes.Form}>
      {loading || !student ? <Spinner /> : null}

      {student ? (
        <Form
          disabled
          onSubmit={onShowConfirmation}
          caption="Delete"
          data={student}
        />
      ) : null}

      {showConfirmation ? (
        <Confirmation
          title="Delete Student"
          question={`Are you sure you want to delete the student: ${name}?`}
          caption1="Delete"
          caption2="Cancel"
          action={onDeleteStudent}
          showConfirmation={onShowConfirmation}
          closeConfirmation={onCloseConfirmation}
        />
      ) : null}
    </div>
  );
};

export default DeleteStudent;
