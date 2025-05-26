import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../styles/CardDetails.css";

export default function CardDetails() {
  const { addMovieToWatchlist, removeMovieFromWatchlist, watchlist } =
    useContext(GlobalContext);

  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { title, src, rating, overview, year, language } = state || {};

  const movie = {
    id,
    title,
    src,
    rating,
    overview,
    year,
    language,
  };

  const isInWatchlist = watchlist.some((item) => item.id === id);

  const handleToggle = () => {
    if (isInWatchlist) {
      removeMovieFromWatchlist(id);
    } else {
      addMovieToWatchlist(movie);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  if (!state) {
    return <h2>Data not found for ID: {id}</h2>;
  }

  return (
    <div className="overlay" onClick={handleClose}>
      <div className="cardDetails" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={title} className="poster" />
        <div className="cardInfo">
          <h2>{title}</h2>
          <p>IMDB: {rating}</p>
          <p>Language: {language}</p>
          <p>Year: {year?.slice(0, 4)}</p>
          <p>Overview: {overview}</p>
          <button className="addBtn" onClick={handleToggle}>
            {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
        <button className="closeButton" onClick={handleClose}>
          Close X
        </button>
      </div>
    </div>
  );
}
