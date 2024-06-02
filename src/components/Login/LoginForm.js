import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';
import { authActions } from '../../store';
import { useHttp } from '../../hooks/useHttp';
import { errorConstants } from '../../constants/errors';

const LoginForm = (props) => {
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();
  const { sendRequest, data, error } = useHttp();

  useEffect(() => {
    if (data && data.message) {
      dispatch(authActions.login(usernameRef.current.value));
      closeForm();
      history.push('/home');
    }
  }, [data]);

  useEffect(() => {
    if (error && data && data.errors) {
      data.errors.forEach((error) => {
        if (error.msg === errorConstants.USER_NOT_EXIST) {
          setShowUsernameError(true);
        } else if (error.msg === errorConstants.INVALID_PASSWORD) {
          setShowPasswordError(true);
        }
      });
    }
  }, [error]);

  const closeForm = () => {
    props.onClick();
  };

  const handleUsernameChange = () => {
    if (showUsernameError) {
      setShowUsernameError(false);
    }
  };

  const handlePasswordChange = () => {
    if (showPasswordError) {
      setShowPasswordError(false);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    await sendRequest('http://localhost:8080/user/login', 'POST', {
      email: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <h3>Login</h3>
      <div className={classes.section}>
        <label htmlFor="username" className={classes.label}>
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          className={classes.input}
          onChange={handleUsernameChange}
        ></input>
        {showUsernameError && (
          <div className={classes.error}>Username does not exist.</div>
        )}
      </div>
      <div className={classes.section}>
        <label htmlFor="password" className={classes.label}>
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          className={classes.input}
          onChange={handlePasswordChange}
        ></input>
        {showPasswordError && (
          <div className={classes.error}>Password is incorrect.</div>
        )}
      </div>
      <div className={classes.actions}>
        <Button btnClasses="green">Log In</Button>
      </div>
    </form>
  );
};

export default LoginForm;
