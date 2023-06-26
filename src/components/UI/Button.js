import React from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  const classesArray = props.btnClasses.trim().split(" ");

  let allClasses = classesArray
    .reduce((prevValue, currValue) => {
      return prevValue + ` ${classes[currValue]}`;
    }, "")
    .trim();

  return (
    <button
      className={allClasses}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  btnClasses: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  btnClasses: "",
  onClick: () => {},
  disabled: false,
};

export default Button;
