import React from "react";
import type { Movie } from "types";

type SelectedMovieFields = Pick<
  Movie,
  | "Actors"
  | "Director"
  | "Writer"
  | "Genre"
  | "Language"
  | "Country"
  | "Released"
  | "Awards"
  | "BoxOffice"
  | "DVD"
>;

type MovieInfoProps = {
  movie: SelectedMovieFields;
};

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  const details = [
    "Actors",
    "Director",
    "Writer",
    "Genre",
    "Language",
    "Country",
    "Released",
    "Awards",
    "BoxOffice",
    "DVD",
  ] as const;

  return (
    <div className="grid grid-cols-7 gap-2 bg-slate-50/80 pb-6 px-6">
      {details.map((field) => (
        <React.Fragment key={field}>
          <div className="col-span-2 font-semibold">{field}:</div>
          <div className="col-span-5">{movie[field]}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MovieInfo;
