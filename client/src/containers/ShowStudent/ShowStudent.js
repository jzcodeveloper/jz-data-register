import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ShowStudent.css";

import { fetchStudent, resetStudent } from "../../store/actions/studentActions";

import Spinner from "../../components/UI/Spinner/Spinner";
import Form from "../../components/App/Form/Form";

const ShowStudent = () => {
  const dispatch = useDispatch();

  const { student, loading } = useSelector(({ student }) => student);

  useEffect(() => {
    document.title = `JZ Data Register - Show Student`;
    const [, , name] = window.location.pathname.split("/");
    dispatch(fetchStudent(name));
    return () => dispatch(resetStudent());
  }, []);

  const printStudent = e => {
    e.preventDefault();

    const { location, screen, open } = window;
    const { availHeight, availWidth } = screen;
    const print = open("", "", `height=${availHeight},width=${availWidth}`);
    const [, , name] = location.pathname.split("/");
    print.location.replace(`/print/${name}`);
    print.document.close();
  };

  return (
    <div className={classes.Form}>
      {loading || !student ? <Spinner /> : null}

      {student ? (
        <Form disabled onSubmit={printStudent} caption="Print" data={student} />
      ) : null}
    </div>
  );
};

export default ShowStudent;
