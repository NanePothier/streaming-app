import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userDataActions } from '../../store';
import PropTypes from 'prop-types';
import classes from './Plan.module.css';
import Button from '../UI/Button';

const Plan = ({ id, type, title, info, price, description, promote }) => {
  let planClasses = promote
    ? `${classes.plan} ${classes.promote}`
    : `${classes.plan}`;
  let btnClasses = promote ? 'select black' : 'select white';

  const history = useHistory();
  const dispatch = useDispatch();

  const planSelectionHandler = () => {
    dispatch(userDataActions.updatePlan(id));
    history.push(`/account?plan=${id}`);
  };

  return (
    <div className={planClasses}>
      {promote && type === 'base' && (
        <div className={classes.badge}>MOST POPULAR</div>
      )}
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.info}>{info}</div>
      <div className={classes.price}>
        <span className={classes.highlight}>{`$${price}`}</span>
        <span className={classes.month}>{`/month`}</span>
      </div>
      <div className={classes.description} data-testid={'description'}>
        {description}
      </div>
      <Button btnClasses={btnClasses} onClick={planSelectionHandler}>
        SELECT
      </Button>
    </div>
  );
};

Plan.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  info: PropTypes.string,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  promote: PropTypes.bool,
};

Plan.defaultProps = {
  title: '',
  info: '',
  description: '',
  promote: false,
};

export default Plan;
