import React from 'react';
import {Link} from 'react-router-dom';
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
      <Link to='/plans'>
        <Button btnClass="green" label="START FREE TRIAL" />
      </Link>
      <p className={classes.info}>
        Free trial available only for new customers.
      </p>
    </div>
  );
};

export default StartTrial;
