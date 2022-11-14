import React from "react";
import classes from "./Dropdown.module.css";

const MenuItem = ({ id, title, selected, className, onSelectItem }) => {
  const handleItemClick = () => {
    onSelectItem({ title });
  };

  return (
    <button
      className={`${classes.menuItem} ${className}`}
      onClick={handleItemClick}
    >
      {title}
    </button>
  );
};

export default MenuItem;
