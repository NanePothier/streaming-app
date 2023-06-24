import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "./Button";
import PropTypes from "prop-types";
import HeaderOption from "./HeaderOption";

const WELCOME = "welcome";
const HOME = "home";
const defaultSelections = [
  {
    name: "Home",
    isSelected: true,
  },
  {
    name: "My Stuff",
    isSelected: false,
  },
  {
    name: "TV Shows",
    isSelected: false,
  },
  {
    name: "Movies",
    isSelected: false,
  },
];

const Header = ({ headerType }) => {
  const history = useHistory();
  const logo = headerType === WELCOME ? "BumbleBee" : "BUMBLEBEE";

  const [selections, setSelections] = useState(defaultSelections);

  const loginHandler = () => {};

  const handleLogoClick = () => {
    if (headerType === WELCOME) {
      history.push("/welcome");
    } else if (headerType === HOME) {
      history.push("/home");
    }
  };

  const handleOptionSelected = (option) => {
    setSelections((prevSelections) =>
      prevSelections.map((selection) => {
        if (selection.name === option) {
          return {
            name: option,
            isSelected: true,
          };
        }
        return {
          name: selection.name,
          isSelected: false,
        };
      })
    );
  };

  return (
    <header
      className={`${headerType === WELCOME && classes.welcomeHeader} ${
        headerType === HOME && classes.homeHeader
      }`}
    >
      <div
        className={`${headerType === WELCOME && classes.welcomeLogo} ${
          headerType === HOME && classes.homeLogo
        }`}
        onClick={handleLogoClick}
      >
        {logo}
      </div>
      {headerType === HOME && (
        <div className={classes.selections}>
          {selections.map((selection) => (
            <HeaderOption
              key={selection.name}
              optionName={selection.name}
              isSelected={selection.isSelected}
              onClick={handleOptionSelected}
            />
          ))}
        </div>
      )}
      {headerType === WELCOME && (
        <Button
          btnClasses="transparent__black"
          onClick={loginHandler}
          disabled={false}
        >
          LOG IN
        </Button>
      )}
    </header>
  );
};

Header.propTypes = {
  headerType: PropTypes.string,
};

Header.defaultProps = {
  headerType: "welcome",
};

export default Header;
