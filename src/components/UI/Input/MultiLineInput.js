import React from "react";
import classes from "./MultiLineInput.module.css";
import PropTypes from "prop-types";

const MultiLineInput = React.forwardRef(
  (
    {
      inputId,
      inputType,
      labelName,
      maxLength,
      autoFocus,
      lettersOnly,
      onBlur,
      onKeyDown,
      showWarning,
    },
    ref
  ) => {
    const handleKeyDown = (e) => {
      const keyCode = e.which;

      if (lettersOnly) {
        const isAllowed =
          (keyCode >= 65 && keyCode <= 90) ||
          keyCode === 8 ||
          keyCode === 16 ||
          keyCode === 32 ||
          keyCode === 189;

        if (!isAllowed) {
          e.preventDefault();
        }
      }

      onKeyDown(e.target.id);
    };

    const handleBlur = (e) => {
      onBlur(e.target.id);
    };

    return (
      <div className={classes.section}>
        <label htmlFor={inputId} className={classes.label}>
          {labelName}
        </label>
        <input
          type={inputType}
          id={inputId}
          ref={ref}
          className={`${classes.input} ${showWarning && classes.warning}`}
          maxLength={maxLength}
          autoFocus={autoFocus}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        ></input>
      </div>
    );
  }
);

MultiLineInput.propTypes = {
  inputId: PropTypes.string,
  inputType: PropTypes.string,
  labelName: PropTypes.string,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  lettersOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  showWarning: PropTypes.bool,
};

MultiLineInput.defaultProps = {
  inputId: "",
  inputType: "text",
  labelName: "",
  maxLength: 50,
  autoFocus: false,
  lettersOnly: false,
  onBlur: () => {},
  onKeyDown: () => {},
  showWarning: false,
};

export default MultiLineInput;
