import { useState } from "react";
import CardDetails from "./CardDetails";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  title,
  src,
  rating,
  overview,
  year,
  language,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const path = window.location.pathname.includes("movies")
      ? `/movies/${id}`
      : window.location.pathname.includes("series")
      ? `/series/${id}`
      : `/home/${id}`;
    navigate(path, {
      state: { id, title, src, rating, overview, year, language },
    });
  };
  return (
    <>
      <div className="card" data-id={id} onClick={handleClick}>
        <img src={src} alt={title} />
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
      </div>
    </>
  );
}
