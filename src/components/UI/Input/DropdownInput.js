import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import classes from "./DropdownInput.module.css";

const DropdownInput = ({
  inputId,
  labelName,
  title,
  options,
  onSelectItem,
  dropdownClass,
}) => {
  const handleItemSelection = (menuItem) => {
    onSelectItem({ ...menuItem, inputId });
  };

  return (
    <div className={classes.section}>
      <label htmlFor={inputId} className={classes.label}>
        {labelName}
      </label>
      <Dropdown
        title={title}
        options={options}
        className={dropdownClass}
        onSelectOption={handleItemSelection}
      />
    </div>
  );
};

export default DropdownInput;
