import "../styles/CardDetails.css"
import { useLocation } from "react-router-dom";


export default function CardDetails({
  src,
  title,
  imdb,
  language,
  overview,
  closePopup,
  year,
}) {
  return (
    <div className="overlay" onClick={closePopup}>
      <div className="cardDetails" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" className="poster" />
        <div className="cardInfo">
          <h2>{title}</h2>
          <p>IMDB: {imdb}</p>
          <p>Language: {language}</p>
          <p>Year: {year.slice(0, 4)}</p>
          <p>Overview: {overview}</p>
        </div>
        <button className="closeButton" onClick={closePopup}>
          Close X
        </button>
      </div>
    </div>
  );
}
