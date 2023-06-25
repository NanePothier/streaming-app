import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "./Button";
import PropTypes from "prop-types";
import HeaderOption from "./HeaderOption";

const WELCOME = "welcome";
const HOME = "home";

const Header = ({ headerType, selections, onSelectionClick }) => {
  const history = useHistory();
  const logo = headerType === WELCOME ? "BumbleBee" : "BUMBLEBEE";

  const loginHandler = () => {};

  const handleLogoClick = () => {
    if (headerType === WELCOME) {
      history.push("/welcome");
    } else if (headerType === HOME) {
      history.push("/home");
    }
  };

  const handleOptionSelected = (option) => {
    onSelectionClick(option);
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
  selections: PropTypes.array,
  onSelectionClick: PropTypes.func,
};

Header.defaultProps = {
  headerType: "welcome",
  selections: [],
  onSelectionClick: () => {},
};

export default Header;
