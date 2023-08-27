import type { Movie } from "types";
import { Card, Badge } from "@components/base";
import { useAppDispatch, RootState } from "@store/index";
import { useSelector } from "react-redux";
import classNames from "classnames";
import Save from "@assets/save.tsx";
import Remove from "@assets/remove.tsx";

type SelectedMovieFields = Pick<Movie, "Title" | "Poster" | "Year" | "Type" | "imdbID">;

type MovieCardProps = {
  movie: SelectedMovieFields;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const addMovie = (movie: Movie) => {
    dispatch({ type: "watchlist/addMovie", payload: movie });
  };

  const removeMovie = (movie: Movie) => {
    dispatch({ type: "watchlist/removeMovie", payload: movie });
  };

  const watchlist = useSelector((state: RootState) => state.watchlist.list);

  const isInWatchlist = (movie: Movie) => {
    return watchlist.some((item) => item.imdbID === movie.imdbID);
  };

  const addToListClass = classNames(
    isInWatchlist(movie)
      ? "text-slate-900 hover:bg-secondary-50/5 hover:text-secondary-500"
      : "text-zinc-900 hover:bg-primary-50/5 hover:text-primary-500",
    "transition duration-300 ease-in-out transform hover:scale-110 flex items-center cursor-pointer rounded-xl",
    "p-2 mr-2 ml-4"
  );

  const iconClass = classNames("w-6 h-6 rounded-full mr-1");

  return (
    <Card
      key={movie.imdbID}
      title={movie.Title}
      imageSrc={movie.Poster}
      imageAlt={movie.Title}
      imageOverlay
      imageCaption={"Released: " + movie.Year}
      link={`/movie/${movie.imdbID}`}
    >
      <div className="absolute bottom-3 left-3 flex items-center justify-between">
        <Badge variant={movie.Type === "movie" ? "info" : "primary"}>{movie.Type}</Badge>
        <div
          onClick={() => {
            isInWatchlist(movie) ? removeMovie(movie) : addMovie(movie);
          }}
          className={addToListClass}
        >
          {isInWatchlist(movie) ? (
            <>
              <Remove className={iconClass} />
              <span className="text-xs">Remove</span>
            </>
          ) : (
            <>
              <Save className={iconClass} />
              <span className="text-xs">Add to list</span>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
