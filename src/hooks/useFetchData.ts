import { useState, useEffect } from "react";
import { options } from "../api/tmdb";

const useFetchData = ( url:string, mapFn ) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch(url, options)
          .then((responce) => responce.json())
          .then((data) => {
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