import React from "react";
import classes from "./MovieTile.module.css";
import PropTypes from "prop-types";

const MovieTile = ({ title, description }) => {
  const printImageText = () => {
    let textArray = [];
    for (let i = 0; i < 45; i++) {
      textArray.push(" Image");
    }
    return textArray;
  };

  return (
    <div className={classes.movieTile}>
      <div className={classes.image}>{printImageText()}</div>
      <div className={classes.infoBox}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
};

MovieTile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

MovieTile.defaultProps = {
  title: "",
  description: "",
};

export default MovieTile;
