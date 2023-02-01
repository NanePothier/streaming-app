import Header from "../UI/Header";
import classes from "./AccountContainer.module.css";
import AccountForm from "./AccountForm";

const AccountContainer = (props) => {
  return (
    <div className={classes.background}>
      <Header />
      <div className={classes.formContainer}>
        <AccountForm />
      </div>
    </div>
  );
};

export default AccountContainer;
