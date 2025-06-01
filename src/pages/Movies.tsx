import useFetchData from "../hooks/useFetchData";
import CardsContainer from "../components/CardsContainer";
import { mapMovie } from "../utils/mappers";
import { API_MOVIE_URL } from "../api/urls";

export default function Movies() {
  const { data, loading, error } = useFetchData(API_MOVIE_URL, mapMovie);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error loading data</h2>;
  }

  return (
    <>
      <h2 className="sectionTitle">All tranding movies now</h2>
      <CardsContainer items={data} />
    </>
  );
}
