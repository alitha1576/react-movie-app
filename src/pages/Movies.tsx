import useFetchData from "../hooks/useFetchData";
import Card from "../components/Card";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const mapMovie = (item) => ({
    id: item.id,
    title: item.title,
    src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    rating: Number(item.vote_average.toFixed(1)),
  });


export default function Movies() {

  const { media, error } = useFetchData(API_URL, mapMovie);

  if (error) return <p>Error loading movies</p>;


  return (
    <>
      <h2>Tranding movies now</h2>
      {media.map((item) => (
        <Card data-id={item.id} {...item} />
      ))}
    </>
  );
}
