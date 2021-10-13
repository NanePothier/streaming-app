import React, { useState } from 'react';
import classes from './Plans.module.css';
import PlanSwitch from './PlanSwitch';
import Plan from './Plan';

const PLANS = [
  {
    id: 'p1',
    type: 'base',
    title: 'BumbleBee (No Ads)',
    info: 'Get First Month Free, Then',
    price: 11.99,
    description:
      'This plan lets you watch all of our shows and movies without ads!',
    promote: false,
  },
  {
    id: 'p2',
    type: 'base',
    title: 'BumbleBee',
    info: 'Get First Month Free, Then',
    price: 5.99,
    description:
      'This ad-supported plan lets you watch all you favorite shows and movies!',
    promote: true,
  },
  {
    id: 'p3',
    type: 'base',
    title: 'BumbleBee + LiveTV',
    info: 'Get First Month Free, Then',
    price: 29.99,
    description:
      'Watch all your favorite shows and movies and get access to 40 live channels!',
    promote: false,
  },
  {
    id: 'p4',
    type: 'bundle',
    title: 'BumbleBee (No Ads)',
    info: 'BumbleBee & HBO',
    price: 16.99,
    description:
      'Gain access to BumbleBee and HBO and watch all your favorite shows and movies without ads!',
    promote: false,
  },
  {
    id: 'p5',
    type: 'bundle',
    title: 'BumbleBee',
    info: 'BumbleBee & HBO',
    price: 10.99,
    description:
      'This ad-supported plan lets you get access to BumbleBee and HBO so that you can watch all your favorite shows and movies for a low price!',
    promote: true,
  },
  {
    id: 'p6',
    type: 'bundle',
    title: 'BumbleBee + LiveTV',
    info: 'BumbleBee & HBO',
    price: 39.99,
    description:
      'Watch all your favorite shows and movies with BumbleBee and HBO + get access to 40 live channels! What a deal!',
    promote: false,
  },
];

const Plans = (props) => {
  const [showBasePlans, setShowBasePlans] = useState(true);

  let type = showBasePlans ? 'base' : 'bundle';

  let plans = PLANS.filter((plan) => {
    return plan.type === type;
  });

  let mappedPlans = plans.map((plan) => {
    return (
      <Plan
        key={plan.id}
        id={plan.id}
        type={plan.type}
        title={plan.title}
        info={plan.info}
        price={plan.price}
        description={plan.description}
        promote={plan.promote}
      />
    );
  });

  const switchPlansHandler = (type) => {
    if (type === 'base') {
      if (!showBasePlans) {
        setShowBasePlans(true);
      }
    } else {
      if (showBasePlans) {
        setShowBasePlans(false);
      }
    }
  };

  return (
    <React.Fragment>
      <PlanSwitch
        switchPlans={switchPlansHandler}
        basePlansShown={showBasePlans}
      />
      <div className={classes.plans}>{mappedPlans}</div>
    </React.Fragment>
  );
};

export default Plans;
