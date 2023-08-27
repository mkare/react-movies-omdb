import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageManager } from "@utils/localStorage";
import type { Movie } from "types";

export interface WatchlistState {
  list: Movie[];
  isExist: boolean;
}

// Başlangıç durumunu yüklemek yerine burada sadece boş bir nesne oluşturun
const initialState: WatchlistState = {
  list: [],
  isExist: false,
};

const loadStoredWatchlist = async (): Promise<void> => {
  try {
    const storedWatchlist = await LocalStorageManager.getItem("watchlist");
    if (storedWatchlist) {
      initialState.list = (storedWatchlist as WatchlistState).list;
      initialState.isExist = (storedWatchlist as WatchlistState).isExist;
    }
  } catch (error) {
    console.error("Error loading watchlist from localStorage:", error);
  }
};

// Stored watchlist'i yükleme işlemini başlat
loadStoredWatchlist();

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
