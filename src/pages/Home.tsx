import useFetchData from "../hooks/useFetchData";
import CardsContainer from "../components/CardsContainer";
import { mapMovie } from "../utils/mappers";
import { mapSeries } from "../utils/mappers";


const API_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const API_SERIES_URL =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";


export default function Home() {

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchData(API_MOVIES_URL, mapMovie);


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
        <h2 className="sectionTitle">Top rated movies</h2>
        <CardsContainer items={movies.slice(0, 4)} />
      </div>
      <div>
        <h2 className="sectionTitle">Top rated series</h2>
        <CardsContainer items={series.slice(0, 4)} />
      </div>
    </div>
  );
}
