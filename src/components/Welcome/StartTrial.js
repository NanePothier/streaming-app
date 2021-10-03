import React from 'react';
import Button from '../UI/Button';
import classes from './StartTrial.module.css';

const StartTrial = (props) => {
  return (
    <div className={classes.trial}>
      <h5 className={classes.free}>TRY UP TO ONE MONTH FREE</h5>
      <h1 className={classes.logo}>BumbleBee</h1>
      <h2 className={classes.description}>
        Watch thousands of popular TV shows and movies
      </h2>
      <Button btnClass="green" label="START FREE TRIAL" />
      <p className={classes.info}>
        Free trial available only for new customers.
      </p>
    </div>
  );
};

export default StartTrial;
