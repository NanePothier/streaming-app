import React from "react";
import classes from "./MovieTile.module.css";
import PropTypes from "prop-types";

const MovieTile = ({ title, description }) => {
  return (
    <div className={classes.movieTile}>
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
