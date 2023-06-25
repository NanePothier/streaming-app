import React from "react";
import MovieRow from "./Movie/MovieRow";
import mockData from "../../mock/movies-home.json";

const HomeContent = (props) => {
  return (
    <div>
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
