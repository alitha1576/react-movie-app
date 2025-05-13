import { useEffect, useState } from "react";
import type { CardProps } from "../types/CardProps";
import type { TMDBSeries } from "../types/TMDBSeries";
import CardsContainer from "../components/CardsContainer";
import { options } from "../api/tmdb";

const API_URL =
  "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";


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
          rating: Number(item.vote_average.toFixed(1)),
        }));
        setMedia(mapped);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <h2 className="sectionTitle">Series: on air now</h2>
      <CardsContainer items={media} />
    </>
  );
}
