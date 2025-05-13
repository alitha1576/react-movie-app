import { useState, useEffect } from "react";
import { options } from "../api/tmdb";

export default function useFetchData (url, mapFunction) {
     const [media, setMedia] = useState([]);
     const [error, setError] = useState(null);

      useEffect(() => {
        fetch(url, options)
          .then((responce) => responce.json())
          .then((data) => {
            const mapped = data.results.map(mapFunction);
            setMedia(mapped);
          })
          .catch((err) => setError(err));
      }, [url, mapFunction]);
      return { media, error };

}