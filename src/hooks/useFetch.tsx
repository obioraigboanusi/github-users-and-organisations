import { config } from "process";
import { useEffect, useState } from "react";
import AxiosInstance from "../api/AxiosInstance";

const useFetch = (url: string, options: object = {}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    AxiosInstance.get(url, options)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
