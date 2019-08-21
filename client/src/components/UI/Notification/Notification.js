import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { resetAlert } from "../../../store/actions/alertActions";

import classes from "./Notification.css";

const Notification = () => {
  const dispatch = useDispatch();

  const { text, color, icon } = useSelector(({ alert }) => alert);

  useEffect(() => {
    if (text) {
      const { Notification, OpenNotification, CloseNotification } = classes;
      const el = document.querySelector(`.${Notification}`);

      el.classList.add(OpenNotification);

      setTimeout(() => {
        el.classList.replace(OpenNotification, CloseNotification);
      }, 3000);

      setTimeout(() => {
        el.classList.remove(CloseNotification);
        dispatch(resetAlert());
      }, 3700);
    }
  }, [text]);

  return (
    <div
      className={`${classes.Notification}`}
      style={{ border: `2px solid ${color}` }}
    >
      <i className={icon} style={{ color: color }} />
      <span>{text}</span>
    </div>
  );
};

export default Notification;
