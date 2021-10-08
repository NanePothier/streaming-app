import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './StartScreen.module.css';
import Button from '../UI/Button';
import LoginModal from '../Login/LoginModal';
import StartTrial from './StartTrial';

const StartScreen = (props) => {
  const [loginFormShown, setLoginFormShown] = useState(false);
  const isAuth = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.currentUser);

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
          btnClass="transparent"
          label="Log In"
          onClick={showLoginFormHandler}
          disabled={false}
        />
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
