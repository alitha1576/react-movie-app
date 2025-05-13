// const API_MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
// const API_SERIES_DETAIL =
//   "https://api.themoviedb.org/3/tv/series_id?language=en-US";

export default function CardDetails({
  src,
  title,
  imdb,
  genres,
  country,
  overview,
  closePopup,
}) {
  return (
    <div className="cardDetails">
      <img src={src} alt="" className="poster" />
      <h2>{title}</h2>
      <p>IMDB: {imdb}</p>
      <p>Genres: {genres}</p>
      <p>Country: {country}</p>
      <p>Overview: {overview}</p>

      <button className="closeButton" onClick={closePopup}>
        Close X
      </button>
    </div>
  );
}
