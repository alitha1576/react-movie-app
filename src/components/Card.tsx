import { useNavigate } from "react-router-dom";
import { type CardType } from "../types/CardType";

export default function Card({
  id,
  title,
  src,
  rating,
  overview,
  year,
  language,
}: CardType) {
  const navigate = useNavigate();

  const handleClick = () => {
    const path =
      window.location.pathname === "/"
        ? `/home/${id}`
        : `${window.location.pathname}/${id}`;
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
