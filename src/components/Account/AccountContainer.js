import Header from "../UI/Header";
import classes from "./AccountContainer.module.css";
import Dropdown from "../UI/Dropdown/Dropdown";

const dropdownOptions = [
  {
    id: 1,
    title: "Tiger",
    isSelected: false,
  },
  {
    id: 2,
    title: "Lion",
    isSelected: false,
  },
  {
    id: 3,
    title: "Panther",
    isSelected: false,
  },
  {
    id: 4,
    title: "Kangaroo",
    isSelected: false,
  },
];

const AccountContainer = (props) => {
  return (
    <div className={classes.background}>
      <Header />
      <div className={classes.formContainer}>
        <Dropdown headerTitle={"Select animal"} options={dropdownOptions} />
      </div>
    </div>
  );
};

export default AccountContainer;
