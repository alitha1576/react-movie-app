import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CardsContainer from "../components/CardsContainer";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <h2 className="sectionTitle">Watchlist: your movies and series</h2>
      <CardsContainer items={watchlist} />
    </>
  );
}
