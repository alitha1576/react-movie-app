import useFetchData from "../hooks/useFetchData";
import CardsContainer from "../components/CardsContainer";
import { mapMovie } from "../utils/mappers";
import { mapSeries } from "../utils/mappers";
import { API_MOVIE_URL, API_SERIES_URL } from "../api/urls";
import { Link } from "react-router";

export default function Home() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchData(API_MOVIE_URL, mapMovie);

  const {
    data: series,
    loading: seriesLoading,
    error: seriesError,
  } = useFetchData(API_SERIES_URL, mapSeries);

  if (moviesLoading || seriesLoading) {
    return <h2>Loading...</h2>;
  }

  if (moviesError || seriesError) {
    return <h2>Error loading data</h2>;
  }

  return (
    <div className="homeContainer">
      <div>
        <Link to="/movies">
          <h2 className="sectionTitle sectionTitleHome">Tranding movies now</h2>
        </Link>
        <CardsContainer items={movies.slice(0, 4)} />
      </div>
      <div>
        <Link to="/series">
          <h2 className="sectionTitle sectionTitleHome">Series: on air now</h2>
        </Link>
        <CardsContainer items={series.slice(0, 4)} />
      </div>
    </div>
  );
}
