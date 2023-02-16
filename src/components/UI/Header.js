import { useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "./Button";

const Header = (props) => {
  const history = useHistory();

  const loginHandler = () => {};

  const handleLogoClick = () => {
    history.push("/welcome");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={handleLogoClick}>
        BumbleBee
      </div>
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
