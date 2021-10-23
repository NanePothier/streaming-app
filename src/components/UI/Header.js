import classes from './Header.module.css';
import Button from './Button';

const Header = (props) => {
  const loginHandler = () => {};

  return (
    <header className={classes.header}>
      <div className={classes.logo}>BumbleBee</div>
      <Button
        btnClasses="transparent__black"
        onClick={loginHandler}
        disabled={false}
      >
        LOG IN
      </Button>
    </header>
  );
};

export default Header;
