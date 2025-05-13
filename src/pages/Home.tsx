import useFetchData from "../hooks/useFetchData";

const API_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const API_SERIES_URL =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

export default function Home() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchData(API_MOVIES_URL);

  const {
    data: series,
    loading: seriesLoading,
    error: seriesError,
  } = useFetchData(API_SERIES_URL);

  console.log(series.slice(0, 5));
  console.log(movies.slice(0, 5));

  if (moviesLoading || seriesLoading) {
    return <h2>Loading...</h2>;
  }

  if (moviesError || seriesError) {
    return <h2>Error loading data</h2>;
  }

  return (
    <div className="homeContainer">
      <div>
        <h2>Top rated movies</h2>
      </div>
      <div>
        <h2>Top rated series</h2>
      </div>
    </div>
  );
}
