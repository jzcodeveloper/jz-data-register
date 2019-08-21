import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./StoreStudent.css";

import {
  createStudent,
  resetStudent
} from "../../store/actions/studentActions";

import Confirmation from "../../components/UI/Confirmation/Confirmation";
import Spinner from "../../components/UI/Spinner/Spinner";
import Form from "../../components/App/Form/Form";

const StoreStudent = ({ history }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector(({ student }) => student);

  const [state, setState] = useState({
    name: "",
    showConfirmation: false,
    formData: {}
  });

  const { name, showConfirmation, formData } = state;

  useEffect(() => {
    document.title = `JZ Data Register - Store Student`;
    return () => dispatch(resetStudent());
  }, []);

  const onShowConfirmation = e => {
    e.preventDefault();

    const { elements } = e.target;
    const { files } = document.getElementById("files");

    const formData = new FormData();
    const file = files && files[0] ? files[0] : null;

    //Appends file input value into the formData
    formData.append("photo", file);

    //Appends other input values into the formData
    for (let i = 1; i < elements.length - 1; i++) {
      formData.append(elements[i].name, elements[i].value);
    }

    setState({ name: elements[1].value, showConfirmation: true, formData });
  };

  const onCloseConfirmation = () => {
    setState({ ...state, showConfirmation: false });
  };

  const onCreateStudent = () => {
    dispatch(createStudent(formData, history));
  };

  return (
    <div className={classes.Form}>
      {loading ? <Spinner /> : null}

      <Form showFileInput onSubmit={onShowConfirmation} caption="Save" />

      {showConfirmation ? (
        <Confirmation
          title="Create Student"
          question={`Are you sure you want to create the student: ${name}?`}
          caption1="Save"
          caption2="Cancel"
          action={onCreateStudent}
          showConfirmation={onShowConfirmation}
          closeConfirmation={onCloseConfirmation}
        />
      ) : null}
    </div>
  );
};

export default StoreStudent;
