import type { CardProps } from "../types/CardProps";

export default function Card({ id, title, src, rating }: CardProps) {
  const handleClick = (e) => {
    const cardId = e.currentTarget.dataset.id;
    console.log("Card ID:", cardId);
    console.log("Props:", { id, title, src, rating });
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
