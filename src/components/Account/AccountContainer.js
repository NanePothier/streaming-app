import Header from "../UI/Header";
import classes from "./AccountContainer.module.css";
import SimpleDropdown from "../UI/Dropdown/SimpleDropdown";

const AccountContainer = (props) => {
  return (
    <div className={classes.background}>
      <Header />
    </div>
  );
};

export default AccountContainer;
