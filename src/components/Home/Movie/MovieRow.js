import React, { useState, useEffect } from "react";
import classes from "./MovieRow.module.css";
import MovieTile from "./MovieTile";
import PropTypes from "prop-types";
import Button from "../../UI/Button";

const MovieRow = ({ heading, movies }) => {
  const [rowPosition, setRowPosition] = useState(0);
  const [showRightBtn, setShowRightBtn] = useState(false);

  useEffect(() => {
    const totalSize = movies.length * 262;

    if (totalSize > window.innerWidth) {
      setShowRightBtn(true);
    }
  }, []);

  const handleSliderClick = (event) => {
    const isRightSlide = event.target
      .closest("button")
      .className.includes("sliderRight");

    const newPosition = isRightSlide ? rowPosition - 262 : rowPosition + 262;
    setRowPosition(newPosition);

    const element = document.getElementById(heading);
    element.style.left = `${newPosition}px`;

    const numTilesHidden = Math.abs(newPosition) / 262;
    const tilesVisible = window.innerWidth / 262;

    if (isRightSlide && movies.length - numTilesHidden <= tilesVisible) {
      setShowRightBtn(false);
    } else if (!isRightSlide && movies.length - numTilesHidden > tilesVisible) {
      setShowRightBtn(true);
    }
  };

  return (
    <div className={classes.row}>
      <div className={classes.rowTitle}>{heading}</div>
      <div className={classes.movieTiles} id={heading}>
        {movies.map((movie, idx) => {
          return (
            <MovieTile
              key={`${movie.title}${idx}`}
              title={movie.title}
              description={movie.description}
            />
          );
        })}
      </div>
      {rowPosition < 0 && (
        <Button
          btnClasses="slider sliderLeft round point"
          onClick={handleSliderClick}
        >
          <div className={classes.left}>{`<`}</div>
        </Button>
      )}
      {showRightBtn && (
        <Button
          btnClasses="slider sliderRight round point"
          onClick={handleSliderClick}
        >
          <div className={classes.left}>{`>`}</div>
        </Button>
      )}
    </div>
  );
};

MovieRow.propTypes = {
  heading: PropTypes.string,
  movies: PropTypes.array,
};

MovieRow.defaultProps = {
  heading: "",
  movies: [],
};

export default MovieRow;
