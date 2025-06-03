import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import type { CardType } from "../types/CardType";

let watchlist = JSON.parse(localStorage.getItem("watchlist") || "");
if (!(watchlist instanceof Array)) {
  watchlist = [];
}

const initialState = {
  watchlist: watchlist,
  addMovieToWatchlist: () => {},
  removeMovieFromWatchlist: () => {},
};

type ContextType = {
  watchlist: CardType[];
  removeMovieFromWatchlist: (id: string) => void;
  addMovieToWatchlist: (movie: CardType) => void;
};

export const GlobalContext = createContext<ContextType>(initialState);

export const GlobalProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {

    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state.watchlist]);

  const addMovieToWatchlist = (movie: CardType) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id: string) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
