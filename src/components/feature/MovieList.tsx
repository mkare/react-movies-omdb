import React from "react";
import { Container } from "@components/base";
import { MovieCard } from "@components/block";
import type { Movie } from "types";

export type MovieListProps = {
  children?: React.ReactNode;
  movies: Movie[];
  searchTerm?: string;
};

const MovieList: React.FC<MovieListProps> = ({ movies, searchTerm }) => {
  return (
    <Container>
      {searchTerm && (
        <div className="mt-3 text-center italic text-primary-600">
          Search Result for: {searchTerm}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies && movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </Container>
  );
};

export default MovieList;
