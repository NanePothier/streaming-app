import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../store";
import classes from "./AccountForm.module.css";
import Button from "../UI/Button";
import MultiLineInput from "../UI/Input/MultiLineInput";
import DropdownInput from "../UI/Input/DropdownInput";
import { BIRTH, INPUT, MONTH_OPTIONS } from "./AccountConstants";
import { StringUtils } from "../../utils/StringUtils";
import { useHttp } from "../../hooks/useHttp";

const AccountForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { sendRequest, isLoading, data } = useHttp();

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonthId, setSelectedMonthId] = useState("");
  const [dayOptions, setDayOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  const [showFirstNameWarn, setShowFirstNameWarn] = useState(false);
  const [showLastNameWarn, setShowLastNameWarn] = useState(false);
  const [showUsernameWarn, setShowUsernameWarn] = useState(false);
  const [showPasswordWarn, setShowPasswordWarn] = useState(false);
  const [showDayWarning, setShowDayWarning] = useState(false);
  const [showMonthWarning, setShowMonthWarning] = useState(false);
  const [showYearWarning, setShowYearWarning] = useState(false);

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
    dispatch(userDataActions.clearPlan());
    history.push("/plans");
  };

  const handleDropdownSelection = (data) => {
    switch (data.inputId) {
      case BIRTH.DAY:
        setSelectedDay(data.title);
        setShowDayWarning(false);
        break;
      case BIRTH.MONTH:
        setSelectedMonth(data.title);
        setSelectedMonthId(data.id);
        setShowMonthWarning(false);
        break;
      case BIRTH.YEAR:
        setSelectedYear(data.title);
        setShowYearWarning(false);
        break;
      default:
    }
  };

  const hasValidUsername = () => {
    const username = usernameRef.current.value.trim();
    if (username === "" || username.length < 3) {
      return false;
    }
    return true;
  };

  const hasValidPassword = () => {
    const password = passwordRef.current.value.trim();

    const hasUpperCase = StringUtils.containsLowerOrUpperCase(password);
    const hasLowerCase = StringUtils.containsLowerOrUpperCase(password, true);
    const hasNumber = StringUtils.containsNumber(password);

    if (
      password === "" ||
      password.length < 10 ||
      hasUpperCase === false ||
      hasLowerCase === false ||
      hasNumber === false
    ) {
      return false;
    }
    return true;
  };

  const handleBlur = (inputId) => {
    if (inputId === INPUT.FIRST_NAME) {
      if (firstNameRef.current.value.trim() === "") {
        setShowFirstNameWarn(true);
      }
    } else if (inputId === INPUT.LAST_NAME) {
      if (lastNameRef.current.value.trim() === "") {
        setShowLastNameWarn(true);
      }
    } else if (inputId === INPUT.USERNAME) {
      if (hasValidUsername() === false) {
        setShowUsernameWarn(true);
      }
    } else if (inputId === INPUT.PASSWORD) {
      if (hasValidPassword() === false) {
        setShowPasswordWarn(true);
      }
    }
  };

  const handleKeyDown = (inputId) => {
    if (inputId === INPUT.FIRST_NAME) {
      setShowFirstNameWarn(false);
    } else if (inputId === INPUT.LAST_NAME) {
      setShowLastNameWarn(false);
    } else if (inputId === INPUT.USERNAME) {
      setShowUsernameWarn(false);
    } else if (inputId === INPUT.PASSWORD) {
      setShowPasswordWarn(false);
    }
  };

  const handleCreateAccount = () => {
    let isValid = true;

    if (firstNameRef.current.value.trim() === "") {
      setShowFirstNameWarn(true);
      isValid = false;
    }

    if (lastNameRef.current.value.trim() === "") {
      setShowLastNameWarn(true);
      isValid = false;
    }

    if (hasValidUsername() === false) {
      setShowUsernameWarn(true);
      isValid = false;
    }

    if (hasValidPassword() === false) {
      setShowPasswordWarn(true);
      isValid = false;
    }

    if (selectedDay === "") {
      isValid = false;
      setShowDayWarning(true);
    }

    if (selectedMonth === "") {
      isValid = false;
      setShowMonthWarning(true);
    }

    if (selectedYear === "") {
      isValid = false;
      setShowYearWarning(true);
    }

    if (isValid) {
      const formattedDay = `${selectedDay}`.padStart(2, "0");
      const formattedMonth = `${selectedMonthId}`.padStart(2, "0");

      sendRequest(
        "API/endpoint",
        "POST",
        {
          firstName: firstNameRef.current.value.trim(),
          lastName: lastNameRef.current.value.trim(),
          birthday: `${formattedMonth}/${formattedDay}/${selectedYear}`,
          username: usernameRef.current.value.trim(),
          password: passwordRef.current.value.trim(),
        }
      );
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <h2>Create Account</h2>

      <MultiLineInput
        ref={firstNameRef}
        inputId={INPUT.FIRST_NAME}
        inputType={"text"}
        labelName={"First Name"}
        maxLength={20}
        autoFocus={true}
        lettersOnly={true}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        showWarning={showFirstNameWarn}
      />
      <MultiLineInput
        ref={lastNameRef}
        inputId={INPUT.LAST_NAME}
        inputType={"text"}
        labelName={"Last Name"}
        maxLength={40}
        autoFocus={false}
        lettersOnly={true}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        showWarning={showLastNameWarn}
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
            showWarning={showDayWarning}
          />
          <DropdownInput
            inputId={BIRTH.MONTH}
            labelName={"Month"}
            title={selectedMonth}
            options={MONTH_OPTIONS}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthMonth}
            showWarning={showMonthWarning}
          />
          <DropdownInput
            inputId={BIRTH.YEAR}
            labelName={"Year"}
            title={selectedYear}
            options={yearOptions}
            onSelectItem={handleDropdownSelection}
            dropdownClass={classes.birthYear}
            showWarning={showYearWarning}
          />
        </div>
      </div>

      <MultiLineInput
        ref={usernameRef}
        inputId={INPUT.USERNAME}
        inputType={"text"}
        labelName={"Username"}
        maxLength={20}
        autoFocus={false}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        showWarning={showUsernameWarn}
      />
      <MultiLineInput
        ref={passwordRef}
        inputId={INPUT.PASSWORD}
        inputType={"password"}
        labelName={"Password"}
        maxLength={20}
        autoFocus={false}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        showWarning={showPasswordWarn}
      />

      <div className={classes.actions}>
        <Button btnClasses="green" onClick={onBackHandler}>
          Back
        </Button>
        <Button btnClasses="green" onClick={handleCreateAccount}>
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;
