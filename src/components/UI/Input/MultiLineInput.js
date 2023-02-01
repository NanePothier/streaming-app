import React from "react";
import classes from "./MultiLineInput.module.css";

const MultiLineInput = React.forwardRef(
  ({ inputId, inputType, labelName }, ref) => {
    return (
      <div className={classes.section}>
        <label htmlFor={inputId} className={classes.label}>
          {labelName}
        </label>
        <input
          type={inputType}
          id={inputId}
          ref={ref}
          className={classes.input}
        ></input>
      </div>
    );
  }
);

export default MultiLineInput;