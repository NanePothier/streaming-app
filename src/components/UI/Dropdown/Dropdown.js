import React, { useState, useEffect, useCallback } from "react";
import classes from "./Dropdown.module.css";
import MenuItem from "./MenuItem";

const Dropdown = ({ headerTitle, options, className }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [title, setTitle] = useState(headerTitle);
  const [menuItems, setMenuItems] = useState(options);

  useEffect(() => {
    if (isMenuShown) {
      window.addEventListener("click", closeMenu);
    } else {
      window.removeEventListener("click", closeMenu);
    }
  }, [isMenuShown]);

  const handleHeaderClick = () => {
    setIsMenuShown((prevState) => !prevState);
  };

  const closeMenu = useCallback(() => {
    setIsMenuShown(false);
  }, []);

  const handleMenuItemClick = (menuItem) => {
    setTitle(menuItem.title);
    setMenuItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        return {
          id: item.id,
          title: item.title,
          isSelected: item.title === menuItem.title,
        };
      });
      return updatedItems;
    });
    closeMenu();
  };

  return (
    <div className={`${classes.wrapper} ${className}`}>
      <div className={classes.header} role="button" onClick={handleHeaderClick}>
        <div className={classes.headerTitle}>{title}</div>
      </div>
      {isMenuShown && (
        <div className={classes.menu}>
          {menuItems.map((item) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                selected={item.isSelected}
                onSelectItem={handleMenuItemClick}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
