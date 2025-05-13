import type { CardProps } from "../types/CardProps";

export default function Card({ id, title, src, rating }: CardProps) {
  return (
    <div className="card" data-id={id}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
}
