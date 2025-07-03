import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setError(err.message || "Error fetching data");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
