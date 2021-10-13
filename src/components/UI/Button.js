import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const classesArray = props.btnClasses.trim().split(' ');

  let allClasses = classesArray
    .reduce((prevValue, currValue) => {
      return prevValue + ` ${classes[currValue]}`;
    }, '')
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

export default Button;
