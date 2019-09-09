import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./UpdateStudent.css";

import {
  fetchStudent,
  updateStudent,
  resetStudent
} from "../../store/actions/studentActions";

import Confirmation from "../../components/UI/Confirmation/Confirmation";
import Spinner from "../../components/UI/Spinner/Spinner";
import Form from "../../components/App/Form/Form";

const UpdateStudent = ({ history }) => {
  const dispatch = useDispatch();

  const { student, loading } = useSelector(({ student }) => student);

  const [state, setState] = useState({
    name: "",
    showConfirmation: false,
    formData: {}
  });

  const { name, showConfirmation, formData } = state;

  useEffect(() => {
    document.title = `JZ Data Register - Update Student`;
    const [, , name] = window.location.pathname.split("/");
    dispatch(fetchStudent(name));
    return () => dispatch(resetStudent());
  }, []);

  const onShowConfirmation = e => {
    e.preventDefault();

    const { elements } = e.target;
    const { files } = document.getElementById("files");

    const formData = new FormData();
    const file = files && files[0] ? files[0] : student.photo;

    //Appends input values into the formData
    for (let i = 0; i < elements.length - 1; i++) {
      const { name, value } = elements[i];

      if (name === "photo") {
        formData.append(name, file);
        continue;
      }

      formData.append(name, value);
    }

    setState({ name: elements[1].value, showConfirmation: true, formData });
  };

  const onCloseConfirmation = () => {
    setState({ ...state, showConfirmation: false });
  };

  const onUpdateStudent = () => {
    dispatch(updateStudent(student._id, formData, history));
  };

  return (
    <div className={classes.Form}>
      {loading || !student ? <Spinner /> : null}

      {student ? (
        <Form
          showFileInput
          onSubmit={onShowConfirmation}
          caption="Update"
          data={student}
        />
      ) : null}

      {showConfirmation ? (
        <Confirmation
          title="Update Student"
          question={`Are you sure you want to update the student: ${name}?`}
          caption1="Update"
          caption2="Cancel"
          action={onUpdateStudent}
          showConfirmation={onShowConfirmation}
          closeConfirmation={onCloseConfirmation}
        />
      ) : null}
    </div>
  );
};

export default UpdateStudent;
