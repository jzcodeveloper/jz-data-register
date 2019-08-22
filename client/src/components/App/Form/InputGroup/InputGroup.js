import React from "react";
import classes from "./InputGroup.css";

const InputGroup = ({ labelText, name, ...inputProps }) => {
  const input = React.createElement("input", {
    name,
    placeholder: labelText,
    autoComplete: "off",
    ...inputProps
  });

  return (
    <div className={classes.Wrapper}>
      <label htmlFor={name}>{labelText}</label>
      {input}
    </div>
  );
};

export default InputGroup;
