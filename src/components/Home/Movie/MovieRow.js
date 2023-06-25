import classes from "./MovieRow.module.css";
import MovieTile from "./MovieTile";
import PropTypes from "prop-types";

const MovieRow = ({ heading, movies }) => {
  return (
    <div className={classes.row}>
      <div className={classes.rowTitle}>{heading}</div>
      <div className={classes.movieTiles}>
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
