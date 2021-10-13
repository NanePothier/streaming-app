import classes from './Plan.module.css';
import Button from '../UI/Button';

const Plan = (props) => {
  let planClasses = props.promote ? `${classes.promote}` : `${classes.plan}`;
  let btnClasses = props.promote ? 'select black' : 'select white';

  const planSelectionHandler = () => {};

  return (
    <div className={planClasses}>
      {props.promote && props.type === 'base' && (
        <div className={classes.badge}>MOST POPULAR</div>
      )}
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.info}>{props.info}</div>
      <div className={classes.price}>
        <span className={classes.highlight}>{`$${props.price}`}</span>
        {`/month`}
      </div>
      <div className={classes.description}>{props.description}</div>
      <Button btnClasses={btnClasses} onClick={planSelectionHandler}>
        SELECT
      </Button>
    </div>
  );
};

export default Plan;
