import React from "react";

import classes from "./Search.css";

const Search = ({
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
  value,
  path,
  close
}) => {
  return (
    <section className={classes.Search}>
      <i
        className={`fas fa-arrow-circle-left ${classes.Icon}`}
        onClick={close}
      />
      <input
        type="search"
        placeholder={`Search ${path}...`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value || ""}
        autoFocus
      />
    </section>
  );
};

export default Search;
