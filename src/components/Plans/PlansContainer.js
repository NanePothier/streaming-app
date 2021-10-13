import Header from '../UI/Header';
import Plans from './Plans';
import classes from './PlansContainer.module.css';

const PlansContainer = (props) => {
  return (
    <div className={classes.background}>
      <Header />
      <div className={classes.content}>
        <h1 className={classes.title}>Choose Your Plan</h1>
        <p className={classes.info}>Switch plans or cancel anytime.</p>
        <Plans />
      </div>
    </div>
  );
};

export default PlansContainer;
