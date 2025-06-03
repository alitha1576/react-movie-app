import type { CardType } from "../types/CardType";

type State = {
  watchlist: CardType[];
};

type Action =
  | { type: "ADD_MOVIE_TO_WATCHLIST"; payload: CardType }
  | { type: "REMOVE_MOVIE_FROM_WATCHLIST"; payload: string };

  export default function AppReducer(state: State, action: Action): State {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST": {
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
            }
        }
        default:
            return state;
    }
}