import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button';
import classes from './LoginForm.module.css';

const dummyUsers = [
  {
    username: 'Sam',
    password: 'September',
  },
];

const LoginForm = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const closeForm = () => {
    props.onClick();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dummyUsers.forEach((user) => {
      if (
        user.username === usernameRef.current.value &&
        user.password === passwordRef.current.value
      ) {
        dispatch({
          type: 'AUTH',
          value: { isAuth: true, user: user.username },
        });
        closeForm();
      }
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
        ></input>
      </div>
      <div className={classes.section}>
        <label htmlFor="password" className={classes.label}>
          PASSWORD
        </label>
        <input
          type="text"
          id="password"
          ref={passwordRef}
          className={classes.input}
        ></input>
      </div>
      <div className={classes.actions}>
        <Button btnClass="green" label="Log In" />
      </div>
    </form>
  );
};

export default LoginForm;
