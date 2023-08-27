import type { Movie, MovieSearchResult } from "types";
const apikey = "a3b9f155";
const apiUrl = "http://www.omdbapi.com/";

export const fetchMovies = async (
  searchTerm: string,
  page: number
): Promise<MovieSearchResult> => {
  try {
    const response = await fetch(
      `${apiUrl}?apikey=${apikey}&s=${searchTerm}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {} as MovieSearchResult;
  }
};

export const fetchMovie = async (imdbID: string): Promise<Movie> => {
  try {
    const response = await fetch(
      `${apiUrl}?apikey=${apikey}&i=${imdbID}&plot=full`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {} as Movie;
  }
};
