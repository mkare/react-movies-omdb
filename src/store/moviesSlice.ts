import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovie } from "@utils/requests";
import type { Movie } from "types";

export interface MoviesState {
  movies: Movie[];
  currentMovie: Movie | null;
  searchTerm?: string | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
  totalResults: number;
}

const initialState: MoviesState = {
  movies: [],
  currentMovie: null,
  searchTerm: "Pokemon",
  status: "idle",
  error: null,
  totalResults: 0,
};

export const fetchMoviesAsync = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page }: { searchTerm: string; page: number }) => {
    const response = await fetchMovies(searchTerm, page);
    return response;
  }
);

export const fetchMovieAsync = createAsyncThunk(
  "movies/fetchMovie",
  async (imdbID: string) => {
    const response = await fetchMovie(imdbID);
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.movies = action.payload.Search;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMoviesAsync.rejected, (state, action) => {
        state.status = "failed";
        action.error.message
          ? (state.error = action.error.message)
          : (state.error = "Something went wrong");
      })
      .addCase(fetchMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieAsync.rejected, (state, action) => {
        state.status = "failed";
        action.error.message
          ? (state.error = action.error.message)
          : (state.error = "Something went wrong");
      });
  },
});

export const { updateSearchTerm } = moviesSlice.actions;
export default moviesSlice.reducer;
