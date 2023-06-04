import { useEffect, useState } from 'react';

const useFetch = <T extends object>(url: RequestInfo | URL) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: RequestInfo | URL) => {
    const response = await fetch(url);
    const data = (await response.json()) as T;

    setLoading(false);
    setData(data);
  };

  const reFetchData = (url: RequestInfo | URL) => {
    fetchData(url);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, loading, reFetchData };
};

export default useFetch;
