import React from 'react';
import classes from './Button.module.css';

const ConfirmButton = (props) => {
  const btnClass = props.btnClass;

  return (
    <button
      className={classes[btnClass]}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default ConfirmButton;
