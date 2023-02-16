import React from "react";
import classes from "./SelectedPlan.module.css";

const SelectedPlan = ({ plan }) => {
  return (
    <div className={classes.planContainer}>
      <div className={`${classes.heading} ${classes.headingTop}`}>
        Selected Plan:
      </div>
      <div className={classes.info}>{plan.title}</div>
      <div className={classes.heading}>Plan Price:</div>
      <div className={classes.info}>{`$${plan.price} / month`}</div>
    </div>
  );
};

export default SelectedPlan;
