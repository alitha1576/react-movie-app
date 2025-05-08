import Card from "./Card";
import type { CardsContainerPrors } from "../types/CardsContainerProps";

export default function CardsContainer({ items }: CardsContainerPrors) {
  return (
    <div className="cardsContainer">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          src={item.src}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
