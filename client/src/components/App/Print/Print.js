import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchStudent } from "../../../store/actions/studentActions";

import classes from "./Print.css";
import Form from "../Form/Form";
import Spinner from "../../UI/Spinner/Spinner";

const Print = () => {
  const dispatch = useDispatch();

  const { student, loading } = useSelector(({ student }) => student);

  useEffect(() => {
    const [, , name] = window.location.pathname.split("/");
    document.title = `JZ Data Register - Print Student - ${name}`;
    dispatch(fetchStudent(name));

    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);

  return (
    <>
      {loading || !student ? <Spinner /> : null}

      {student ? (
        <div className={classes.Form}>
          <Form disabled data={student} hideButton />
        </div>
      ) : null}
    </>
  );
};

export default Print;
