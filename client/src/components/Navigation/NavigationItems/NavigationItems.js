import React from "react";
import PropTypes from "prop-types";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = ({ isAuth }) => (
  <ul className={classes.NavigationItems}>
    {isAuth ? (
      <>
        <NavigationItem link="/dashboard">Dashboard</NavigationItem>
        <NavigationItem link="/store-student">Create Student</NavigationItem>
        <NavigationItem link="/update">Update Student</NavigationItem>
        <NavigationItem link="/delete">Delete Student</NavigationItem>
        <NavigationItem link="/show">Show Student</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
      </>
    ) : (
      <>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/register">Register</NavigationItem>
      </>
    )}
  </ul>
);

NavigationItems.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default NavigationItems;
