import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./StartScreen.module.css";
import Button from "../UI/Button";
import LoginModal from "../Login/LoginModal";
import StartTrial from "./StartTrial";

const StartScreen = (props) => {
  const [loginFormShown, setLoginFormShown] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.currentUser);

  const showLoginFormHandler = () => {
    setLoginFormShown(true);
  };

  const hideLoginFormHandler = () => {
    setLoginFormShown(false);
  };

  return (
    <div className={classes.welcome}>
      {loginFormShown && <LoginModal onHideLoginForm={hideLoginFormHandler} />}
      <div className={classes.login}>
        <Button
          btnClasses="transparent"
          onClick={showLoginFormHandler}
          disabled={false}
        >
          LOG IN
        </Button>
      </div>
      <StartTrial />
      {isAuth && (
        <div className={classes.auth}>
          User is authenticated! Current user is: {`${user}`}
        </div>
      )}
    </div>
  );
};

export default StartScreen;
