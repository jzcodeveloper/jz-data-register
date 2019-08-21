import React from "react";

import classes from "./Loading.css";
import icon from "../../../assets/logo-school.png";

const Loading = () => (
  <div className={classes.Modal}>
    <div className={classes.Container}>
      <img src={icon} alt="Icon" />
    </div>
    <p>JZ Data Register</p>
  </div>
);

export default Loading;
