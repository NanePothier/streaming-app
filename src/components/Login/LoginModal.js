import React from 'react';
import Backdrop from '../UI/Backdrop';
import LoginForm from './LoginForm';

const LoginModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onHideLoginForm} />
      <LoginForm onClick={props.onHideLoginForm} />
    </div>
  );
};

export default LoginModal;
