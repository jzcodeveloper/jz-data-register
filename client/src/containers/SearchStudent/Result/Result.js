import React from "react";
import PropTypes from "prop-types";

import avatar from "../../../images/avatar.png";

const Result = ({ className, onClick, photo, name }) => {
  return (
    <div className={className} onClick={() => onClick(name)}>
      <img src={photo ? photo : avatar} alt="Avatar" />
      <p>{name}</p>
    </div>
  );
};

Result.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Result;
