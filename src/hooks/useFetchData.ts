import { useState, useEffect } from "react";
import { options } from "../api/tmdb";
import type { CardType } from "../types/CardType";

type MapFnFunction = (item: Record<string, string | number>)=> CardType;

const useFetchData = ( url: string, mapFn: MapFnFunction ) => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    if (!url) {
      setData([]);
      setLoading(false);
      return;
    }
    fetch(url, options)
      .then((responce) => responce.json())
      .then((data) => {
        if (!data.results || !Array.isArray(data.results)) {
          throw new Error("Invalid data structure: results not found");
        }
        const mapped = data.results.map(mapFn);
        setData(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url, mapFn]);
  return { data, loading, error };
}

export default useFetchData;