import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AccountForm.module.css";
import Button from "../UI/Button";
import MultiLineInput from "../UI/Input/MultiLineInput";
import DropdownInput from "../UI/Input/DropdownInput";
import { BIRTH } from "./AccountConstants";
import { MONTH_OPTIONS } from "./AccountConstants";

const AccountForm = () => {
  const history = useHistory();

  const [dayOptions, setDayOptions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const birthDayRef = useRef("");
  const birthMonthRef = useRef("");
  const birthYearRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    let numDays = 30;
    const optionsDays = [];

    if (selectedMonth === 2) {
      numDays = 29;
    } else if (
      selectedMonth === 1 ||
      selectedMonth === 3 ||
      selectedMonth === 5 ||
      selectedMonth === 7 ||
      selectedMonth === 8 ||
      selectedMonth === 10 ||
      selectedMonth === 12
    ) {
      numDays = 31;
    }

    for (let i = 1; i <= numDays; i++) {
      optionsDays.push({
        id: `d${i}`,
        title: i,
        isSelected: false,
      });
    }
    setDayOptions(optionsDays);
  }, [selectedMonth]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onBackHandler = () => {
    history.push("/plans");
  };

  const handleDropdownSelection = (data) => {
    switch (data.inputId) {
      case BIRTH.DAY:
        birthDayRef.current = data.title;
        break;
      case BIRTH.MONTH:
        birthMonthRef.current = data.title;
        setSelectedMonth(data.id);
        break;
      case BIRTH.YEAR:
        birthYearRef.current = data.title;
        break;
      default:
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <h2>Create Account</h2>

      <MultiLineInput
        ref={firstNameRef}
        inputId={"firstName"}
        inputType={"text"}
        labelName={"First Name"}
      />
      <MultiLineInput
        ref={lastNameRef}
        inputId={"lastName"}
        inputType={"text"}
        labelName={"Last Name"}
      />

      <div className={classes.birthdaySection}>
        <div className={classes.birthdayLabel}>Birthday</div>
        <div className={classes.birthdayDropdowns}>
          <DropdownInput
            inputId={BIRTH.DAY}
            labelName={"Day"}
            defaultTitle={""}
            options={dayOptions}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthDay}
          />
          <DropdownInput
            inputId={BIRTH.MONTH}
            labelName={"Month"}
            defaultTitle={""}
            options={MONTH_OPTIONS}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthMonth}
          />
        </div>
      </div>

      <MultiLineInput
        ref={usernameRef}
        inputId={"username"}
        inputType={"text"}
        labelName={"Username"}
      />
      <MultiLineInput
        ref={passwordRef}
        inputId={"password"}
        inputType={"text"}
        labelName={"Password"}
      />

      <div className={classes.actions}>
        <Button btnClasses="green" onClick={onBackHandler}>
          Back
        </Button>
        <Button btnClasses="green">Create Account</Button>
      </div>
    </form>
  );
};

export default AccountForm;
