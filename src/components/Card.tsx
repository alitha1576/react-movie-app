import type { CardProps } from "../types/CardProps";

export default function Card({ id, title, src, rating }: CardProps) {
  return (
    <div className="cardContainer" data-id={id}>
      <img src={src} alt={title} />
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
    </div>
  );
}
