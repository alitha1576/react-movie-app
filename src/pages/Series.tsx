import { useEffect, useState } from "react";
import type { CardProps } from "../types/CardProps";
import type { TMDBSeries } from "../types/TMDBSeries";
import CardsContainer from "../components/CardsContainer";

const API_URL =
  "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjI1MzU3N2NiM2FkMmQ0NmI1ODJhNGIxODBkYmJlZSIsIm5iZiI6MTc0NjY5Njg3MC42NjEsInN1YiI6IjY4MWM3YWE2ZGM5MzcyODViYzg4YzEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.glC2PreS_jvS7JBc3t0UwEQ3lZm_dCXnG4sMfD-gmi4",
  },
};

export default function Series() {
  const [media, setMedia] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(API_URL, options)
      .then((responce) => responce.json())
      .then((data) => {
        const mapped = data.results.map((item: TMDBSeries) => ({
          id: item.id,
          title: item.name,
          src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          rating: item.vote_average,
        }));
        setMedia(mapped);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <h2>Series: on air now</h2>
      <CardsContainer items={media} />
    </>
  );
}
