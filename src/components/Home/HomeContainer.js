import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../../hooks/useHttp";
import Header from "../UI/Header";
import HomeContent from "./HomeContent";

const OPTIONS = {
  HOME: "Home",
  MYSTUFF: "My Stuff",
  SHOWS: "TV Shows",
  MOVIES: "Movies",
};
const homeSelections = [
  {
    name: OPTIONS.HOME,
    isSelected: true,
  },
  {
    name: OPTIONS.MYSTUFF,
    isSelected: false,
  },
  {
    name: OPTIONS.SHOWS,
    isSelected: false,
  },
  {
    name: OPTIONS.MOVIES,
    isSelected: false,
  },
];

const HomeContainer = (props) => {
  const { sendRequest, data } = useHttp();
  const { username } = useSelector((state) => state.userData);

  const [selections, setSelections] = useState(homeSelections);
  const [userPlan, setUserPlan] = useState("");

  // ----- example fetching data from firebase database -----
  // useEffect(() => {
  //   const getUserData = async () => {
  //     await sendRequest(
  //       "endpoint",
  //       "GET"
  //     );
  //     // once request has finished do something here
  //   };
  //   getUserData();
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     const userData = [];

  //     // data retrieved from firebase
  //     for (const key in data) {
  //       userData.push(data[key]);
  //     }

  //     const userObj = userData.find((data) => data.username === username);
  //     if (userObj) {
  //       setUserPlan(userObj.planId);
  //     }
  //   }
  // }, [data]);

  const handleHeaderSelection = (option) => {
    setSelections((prevSelections) =>
      prevSelections.map((selection) => {
        if (selection.name === option) {
          return {
            name: option,
            isSelected: true,
          };
        }
        return {
          name: selection.name,
          isSelected: false,
        };
      })
    );
  };

  const getSelectionContent = () => {
    const selected = selections.find((sel) => sel.isSelected);

    if (selected.name === OPTIONS.HOME) {
      return <HomeContent />;
    } else if (selected.name === OPTIONS.MYSTUFF) {
      return <div>My Stuff</div>; //TODO
    } else if (selected.name === OPTIONS.SHOWS) {
      return <div>Shows</div>; //TODO
    } else {
      return <div>Movies</div>; //TODO
    }
  };

  return (
    <>
      <Header
        headerType={"home"}
        selections={selections}
        onSelectionClick={handleHeaderSelection}
      />
      {getSelectionContent()}
    </>
  );
};

export default HomeContainer;
