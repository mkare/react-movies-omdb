import type { Movie } from "types";
import { MovieHeader, MovieInfo, MovieRating } from "@components/block";

export type MovieDetailProps = {
  children?: React.ReactNode;
  movie: Movie;
};

const MovieDetail: React.FC<MovieDetailProps> = ({ children, movie }) => {
  return (
    <div className="relative">
      <div className="fixed bottom-0 right-0 p-4 pb-0 bg-white rounded-s-xl md:bg-transparent md:sticky md:bottom-none md:top-3 md:p-0">
        {children && children}
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-start mb-12">
        <div className="md:h-screen md:w-2/6 lg:w-3/12">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full rounded-xl sticky top-16"
          />
        </div>
        <div className="mt-5 md:mt-0 md:w-4/6 md:pl-5 lg:w-9/12">
          <MovieHeader
            title={movie.Title}
            type={movie.Type}
            rating={movie.imdbRating}
            rated={movie.Rated}
            year={movie.Year}
            runtime={movie.Runtime}
          />
          <MovieInfo movie={movie} />
          <MovieRating rating={movie.Ratings} />
          <div className="italic px-6 py-12 bg-gradient-to-b from-slate-50 to-slate-50/75 rounded-b-xl">
            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
