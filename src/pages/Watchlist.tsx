import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CardsContainer from "../components/CardsContainer";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <h2 className="sectionTitle">Watchlist: your movies and series</h2>
      {watchlist.length > 0 ? (
        <CardsContainer items={watchlist} />
      ) : (
        <h3>No movies or series in your list yet. Add some!</h3>
      )}
    </>
  );
}
