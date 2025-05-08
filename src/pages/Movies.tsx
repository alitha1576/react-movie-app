import Card from "../components/Card";

export default function Movies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjI1MzU3N2NiM2FkMmQ0NmI1ODJhNGIxODBkYmJlZSIsIm5iZiI6MTc0NjY5Njg3MC42NjEsInN1YiI6IjY4MWM3YWE2ZGM5MzcyODViYzg4YzEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.glC2PreS_jvS7JBc3t0UwEQ3lZm_dCXnG4sMfD-gmi4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return (
    <>
      <h2>Tranding movies now</h2>
      {/* <Card id={1} title="Anna" src="/hred" rating={5} /> */}
    </>
  );
}
