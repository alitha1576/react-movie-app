import { useEffect, useState } from "react";
import type { CardProps } from "../types/CardProps";
import CardsContainer from "../components/CardsContainer";
import type { TMDBMovie } from '../types/TMDBMovie';
import { options } from '../api/tmdb'

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";


export default function Movies() {
  const [media, setMedia] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(API_URL, options)
      .then((responce) => responce.json())
      .then((data) => {
        const mapped = data.results.map((item: TMDBMovie) => ({
          id: item.id,
          title: item.title,
          src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          rating: Number(item.vote_average.toFixed(1)),
        }));
        setMedia(mapped);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <h2>Tranding movies now</h2>
      <CardsContainer items={media} />
    </>
  );
}
