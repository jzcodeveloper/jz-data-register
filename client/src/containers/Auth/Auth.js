import React from "react";
import classes from "./Auth.css";

import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  const [, path] = window.location.pathname.split("/");

  return (
    <div className={classes.Auth}>
      <div className={classes.LeftSection}>
        <div className={classes.Overlay}>
          <div>
            <p>JZ Data Register</p>
            <p>
              This application allows you to register students enrollment
              information by performing actions such as Create, Read, Update and
              Delete...
            </p>
          </div>
        </div>
      </div>
      {path === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
