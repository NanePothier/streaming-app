import React from "react";

const SimpleMenuItem = ({ value, text, isSelected, className }) => {
  return (
    <option value={value} selected={isSelected} className={className}>
      {text}
    </option>
  );
};

export default SimpleMenuItem;
