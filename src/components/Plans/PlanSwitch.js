import classes from './PlanSwitch.module.css';

const PlanSwitch = (props) => {
  let btnClassesBase = props.basePlansShown
    ? `${classes.button} ${classes.highlight}`
    : `${classes.button}`;
  let btnClassesBundle = props.basePlansShown
    ? `${classes.button}`
    : `${classes.button} ${classes.highlight}`;

  const showBasePlansHandler = () => {
    props.switchPlans('base');
  };

  const showBundlesHandler = () => {
    props.switchPlans('bundle');
  };

  return (
    <div className={classes.container}>
      <button className={btnClassesBase} onClick={showBasePlansHandler}>
        {'BASE PLANS'}
      </button>
      <button className={btnClassesBundle} onClick={showBundlesHandler}>
        {'BUNDLE & SAVE'}
      </button>
    </div>
  );
};

export default PlanSwitch;
