import Card from "./Card";
import { type CardType } from "../types/CardType";

type CardContainerType = {
  items: CardType[];
};

export default function CardsContainer({ items }: CardContainerType) {
  return (
    <div className="cardsContainer">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          src={item.src}
          rating={item.rating}
          overview={item.overview}
          year={item.year}
          language={item.language}
        />
      ))}
    </div>
  );
}
