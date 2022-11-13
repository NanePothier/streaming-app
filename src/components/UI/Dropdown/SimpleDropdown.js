import React from "react";
import SimpleMenuItem from "./SimpleMenuItem";
import classes from "./SimpleDropdown.module.css";

const SimpleDropdown = ({
  id,
  labelName,
  selectName,
  options,
  containerClass,
  labelClass,
  selectClass,
  optionClass,
}) => {
  return (
    <div className={`${classes.container} ${containerClass}`}>
      <label for={id} className={labelClass}>
        {labelName}
      </label>
      <select name={selectName} id={id} className={selectClass}>
        {options.map((option) => {
          return (
            <SimpleMenuItem
              key={option.value}
              value={option.value}
              text={option.text}
              isSelected={option.isDefaultOption}
              className={optionClass}
            />
          );
        })}
      </select>
    </div>
  );
};

export default SimpleDropdown;
