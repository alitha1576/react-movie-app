import useFetchData from "../hooks/useFetchData";
import CardsContainer from "../components/CardsContainer";
import { mapMovie } from "../utils/mappers";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export default function Movies() {
  
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchData(API_URL, mapMovie);

  if (moviesLoading) {
    return <h2>Loading...</h2>;
  }

  if (moviesError) {
    return <h2>Error loading data</h2>;
  }

  return (
    <>
      <h2 className="sectionTitle">Tranding movies now</h2>
      <CardsContainer items={movies} />
    </>
  );
}
