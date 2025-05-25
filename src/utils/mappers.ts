
export const mapMovie = (item: Record<string, string | number>) => ({
  id: item.id,
  title: item.title,
  src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
  rating: Number(item.vote_average).toFixed(1),
  overview: item.overview,
  year: item.release_date,
  language: item.original_language,
});


export const mapSeries = (item: Record<string, string | number>) => ({
    id: item.id,
    title: item.name,
    src: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    rating: Number(item.vote_average).toFixed(1),
    overview: item.overview,
    year: item.first_air_date,
    genre: item.genre_ids,
    language: item.original_language,
  });