import { useState } from "react";
import CardDetails from "./CardDetails";

export default function Card({ id, title, src, rating, overview, year, language }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    const cardId = e.currentTarget.dataset.id;
    console.log("Card ID:", cardId);
    setOpen(true);
  };
  return (
    <>
      <div className="card" data-id={id} onClick={handleClick}>
        <img src={src} alt={title} />
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
      </div>

      {open && (
        <CardDetails
          src={src}
          title={title}
          imdb={rating.toString()}
          overview={overview}
          year={year}
          language={language}
          closePopup={() => setOpen(false)}
        />
      )}
    </>
  );
}
