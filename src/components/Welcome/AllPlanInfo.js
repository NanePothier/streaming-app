import React from 'react';
import classes from './AllPlanInfo.module.css';

const AllPlanInfo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.heading1}>INCLUDED IN ALL PLANS</div>
        <div className={`${classes.heading2} ${classes.text}`}>
          All The TV You Love
        </div>
        <div
          className={`${classes.heading3} ${classes.text}`}
          data-testid={'heading3'}
        >
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, BumbleBee Originals, kids shows and more.
        </div>
      </div>
    </div>
  );
};

export default AllPlanInfo;
