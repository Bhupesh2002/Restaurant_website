import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [menuItem, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setMenuItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        // setLoading(false);
      });
  }, [url]);

  return { menuItem, loading, error };
};

export default useFetch;
