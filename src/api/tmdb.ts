export const API_URL = "https://api.themoviedb.org";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjI1MzU3N2NiM2FkMmQ0NmI1ODJhNGIxODBkYmJlZSIsIm5iZiI6MTc0NjY5Njg3MC42NjEsInN1YiI6IjY4MWM3YWE2ZGM5MzcyODViYzg4YzEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.glC2PreS_jvS7JBc3t0UwEQ3lZm_dCXnG4sMfD-gmi4",
  },
};

export default function fetchFromTMDB () {
    return (path: string) => fetch(API_URL + path, options);
}