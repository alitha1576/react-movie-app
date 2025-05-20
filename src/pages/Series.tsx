import useFetchData from "../hooks/useFetchData";
import CardsContainer from "../components/CardsContainer";
import { mapSeries } from "../utils/mappers";

const API_URL =
  "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";

export default function Series() {
  const {
    data: series,
    loading: seriesLoading,
    error: seriesError,
  } = useFetchData(API_URL, mapSeries);

  if (seriesLoading) {
    return <h2>Loading...</h2>;
  }

  if (seriesError) {
    return <h2>Error loading data</h2>;
  }
  return (
    <>
      <h2 className="sectionTitle">Series: on air now</h2>
      <CardsContainer items={series} />
    </>
  );
}
