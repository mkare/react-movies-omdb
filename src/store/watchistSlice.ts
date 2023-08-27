import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageManager } from "@utils/localStorage";
import type { Movie } from "types";

export interface WatchlistState {
  list: Movie[];
  isExist: boolean;
}

const loadStoredWatchlist = async (): Promise<WatchlistState> => {
  try {
    const storedWatchlist = await LocalStorageManager.getItem("watchlist");
    if (storedWatchlist) {
      return storedWatchlist as WatchlistState;
    }
  } catch (error) {
    console.error("Error loading watchlist from localStorage:", error);
  }

  return {
    list: [],
    isExist: false,
  };
};

const initialStatePromise = loadStoredWatchlist();
const initialState: WatchlistState = await initialStatePromise;

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      if (!state.list.find((movie) => movie.imdbID === action.payload.imdbID)) {
        state.list.push(action.payload);
        LocalStorageManager.setItem("watchlist", state);
      } else {
        state.isExist = true;
      }
    },
    removeMovie: (state, action: PayloadAction<Movie>) => {
      state.list = state.list.filter((movie) => movie.imdbID !== action.payload.imdbID);
      state.isExist = false;
      LocalStorageManager.setItem("watchlist", state);
    },
  },
});

export const { addMovie, removeMovie } = WatchlistSlice.actions;
export default WatchlistSlice.reducer;
