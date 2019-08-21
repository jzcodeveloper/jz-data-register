import React from "react";

import classes from "./Footer.css";

const Footer = () => (
  <footer className={classes.Footer}>
    Copyright &copy; {new Date().getFullYear()} JZ Data Register
  </footer>
);

export default Footer;
