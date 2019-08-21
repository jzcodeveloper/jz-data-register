import React from "react";
import classes from "./InputGroup.css";

const InputGroup = ({
  labelText,
  name,
  type,
  accept,
  onChange,
  id,
  list,
  pattern,
  min,
  max,
  step,
  maxLength,
  disabled,
  defaultValue,
  required
}) => {
  return (
    <div className={classes.Wrapper}>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        accept={accept}
        onChange={onChange}
        id={id}
        list={list}
        placeholder={labelText}
        pattern={pattern}
        min={min}
        max={max}
        step={step}
        maxLength={maxLength}
        autoComplete="off"
        disabled={disabled}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
};

export default InputGroup;
