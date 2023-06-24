import React from "react";
import classes from "./HeaderOption.module.css";

const HeaderOption = ({ optionName, isSelected, onClick }) => {
  const handleOptionClick = (event) => {
    onClick(event.target.innerText);
  };

  return (
    <div
      className={`${classes.option} ${isSelected && classes.selected}`}
      onClick={handleOptionClick}
    >
      {optionName}
    </div>
  );
};

export default HeaderOption;
