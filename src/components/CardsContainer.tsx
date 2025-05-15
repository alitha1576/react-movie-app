import Card from "./Card";

export default function CardsContainer({ items }) {
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
