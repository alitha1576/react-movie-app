import useFetchData from "../hooks/useFetchData";
import CardsContainer from "../components/CardsContainer";
import { mapSeries } from "../utils/mappers";
import { API_SERIES_URL } from "../api/urls";

export default function Series() {
  const {
    data: series,
    loading: seriesLoading,
    error: seriesError,
  } = useFetchData(API_SERIES_URL, mapSeries);

  if (seriesLoading) {
    return <h2>Loading...</h2>;
  }

  if (seriesError) {
    return <h2>Error loading data</h2>;
  }
  return (
    <>
      <h2 className="sectionTitle">All series</h2>
      <CardsContainer items={series} />
    </>
  );
}
