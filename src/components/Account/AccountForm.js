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

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonthId, setSelectedMonthId] = useState("");
  const [dayOptions, setDayOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    const years = [];

    for (let i = 2023; i >= 1920; i--) {
      years.push({
        id: `y${i}`,
        title: i,
        isSelected: false,
      });
    }
    setYearOptions(years);
  }, []);

  useEffect(() => {
    let numDays = 31;
    const optionsDays = [];

    if (selectedMonthId === 2) {
      numDays = 28;

      if (selectedDay > 28) {
        setSelectedDay("");
      }
    } else if (
      selectedMonthId === 4 ||
      selectedMonthId === 6 ||
      selectedMonthId === 9 ||
      selectedMonthId === 11
    ) {
      numDays = 30;

      if (selectedDay > 30) {
        setSelectedDay("");
      }
    }

    for (let i = 1; i <= numDays; i++) {
      optionsDays.push({
        id: `d${i}`,
        title: i,
        isSelected: i === selectedDay,
      });
    }
    setDayOptions(optionsDays);
  }, [selectedMonthId]);

  useEffect(() => {
    if (selectedMonthId === 2) {
      let numDays = 28;

      if (selectedYear % 4 === 0) {
        numDays = 29;
      }

      const days = [];

      for (let i = 1; i <= numDays; i++) {
        days.push({
          id: `d${i}`,
          title: i,
          isSelected: i === selectedDay,
        });
      }
      setDayOptions(days);

      if (selectedDay > numDays) {
        setSelectedDay("");
      }
    }
  }, [selectedYear]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onBackHandler = () => {
    history.push("/plans");
  };

  const handleDropdownSelection = (data) => {
    switch (data.inputId) {
      case BIRTH.DAY:
        setSelectedDay(data.title);
        break;
      case BIRTH.MONTH:
        setSelectedMonth(data.title);
        setSelectedMonthId(data.id);
        break;
      case BIRTH.YEAR:
        setSelectedYear(data.title);
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
        maxLength={20}
      />
      <MultiLineInput
        ref={lastNameRef}
        inputId={"lastName"}
        inputType={"text"}
        labelName={"Last Name"}
        maxLength={40}
      />

      <div className={classes.birthdaySection}>
        <div className={classes.birthdayLabel}>Birthday</div>
        <div className={classes.birthdayDropdowns}>
          <DropdownInput
            inputId={BIRTH.DAY}
            labelName={"Day"}
            title={selectedDay}
            options={dayOptions}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthDay}
          />
          <DropdownInput
            inputId={BIRTH.MONTH}
            labelName={"Month"}
            title={selectedMonth}
            options={MONTH_OPTIONS}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthMonth}
          />
          <DropdownInput
            inputId={BIRTH.YEAR}
            labelName={"Year"}
            title={selectedYear}
            options={yearOptions}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthYear}
          />
        </div>
      </div>

      <MultiLineInput
        ref={usernameRef}
        inputId={"username"}
        inputType={"text"}
        labelName={"Username"}
        maxLength={20}
      />
      <MultiLineInput
        ref={passwordRef}
        inputId={"password"}
        inputType={"text"}
        labelName={"Password"}
        maxLength={20}
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
