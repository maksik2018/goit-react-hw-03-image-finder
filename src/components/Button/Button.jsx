import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, children }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
