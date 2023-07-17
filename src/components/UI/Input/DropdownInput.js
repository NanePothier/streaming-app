import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import classes from './DropdownInput.module.css';

const DropdownInput = ({
  inputId,
  labelName,
  title,
  options,
  onSelectItem,
  dropdownClass,
  showWarning,
}) => {
  const handleItemSelection = (menuItem) => {
    onSelectItem({ ...menuItem, inputId });
  };

  return (
    <div className={classes.section}>
      <div className={classes.label}>{labelName}</div>
      <Dropdown
        title={title}
        options={options}
        className={dropdownClass}
        onSelectOption={handleItemSelection}
        showWarning={showWarning}
      />
    </div>
  );
};

export default DropdownInput;
