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
  const location = useLocation();

  const handleClick = () => {
    navigate(`${id}`, {
      state: {
        id,
        title,
        src,
        rating,
        overview,
        year,
        language,
      },
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
