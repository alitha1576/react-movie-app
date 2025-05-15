import useFetchData from "../hooks/useFetchData";
import { useCallback } from "react";
import CardsContainer from "../components/CardsContainer";

const API_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const API_SERIES_URL =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";


export default function Home() {

  const mapMovie = useCallback(
    (item) => ({
      id: item.id,
      title: item.title,
      src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      rating: Number(item.vote_average.toFixed(1)),
      overview: item.overview,
      year: item.release_date,
      language: item.original_language
    }),
    []
  );

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchData(API_MOVIES_URL, mapMovie);

  const mapSeries = useCallback(
    (item) => ({
      id: item.id,
      title: item.name,
      src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      rating: Number(item.vote_average.toFixed(1)),
      overview: item.overview,
      year: item.first_air_date,
      genre: item.genre_ids,
      language: item.original_language,
    }),
    []
  );

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

  console.log(movies);

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
