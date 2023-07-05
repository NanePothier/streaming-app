import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../UI/Header";
import classes from "./AccountContainer.module.css";
import AccountForm from "./AccountForm";
import { PLANS } from "../Plans/Plans";
import SelectedPlan from "./SelectedPlan";

const AccountContainer = (props) => {
  const search = useLocation().search;
  const selectedPlanId = new URLSearchParams(search).get("plan");
  const selectedPlan = PLANS.find((plan) => plan.id === selectedPlanId);

  const { plan } = useSelector((state) => state.userData);
  const selectPlanFromStore = PLANS.find((p) => p.id === plan);

  return (
    <div className={classes.background}>
      <Header />
      <div className={classes.formContainer}>
        <SelectedPlan plan={selectedPlan} />
        <AccountForm selectedPlanId={selectedPlanId} />
      </div>
    </div>
  );
};

export default AccountContainer;
