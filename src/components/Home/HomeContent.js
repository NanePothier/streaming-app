import React from "react";
import MovieRow from "./Movie/MovieRow";
import mockData from "../../mock/movies-home.json";
import classes from "./HomeContent.module.css";

const HomeContent = (props) => {
  return (
    <div className={classes.content}>
      {mockData.categories.map((category) => {
        return (
          <MovieRow
            key={category.type}
            heading={category.type}
            movies={category.movies}
          />
        );
      })}
    </div>
  );
};

export default HomeContent;
