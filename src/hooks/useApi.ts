import { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const API_URL = 'https://my-json-server.typicode.com/typicode/demo/posts';

const useApi = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get<Post[]>(API_URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useApi;