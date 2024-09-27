import { useState } from "react";

const useFetch = (options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // set to false initially
  const [error, setError] = useState(null);

  const fetchData = async (url, customOptions = {}) => {
    setLoading(true);
    try {
      const {
        method = "GET",
        headers = {},
        body = null,
      } = {
        ...options,
        ...customOptions, // allows overriding options
      };

      const response = await fetch(`http://192.168.4.171:3000/api${url}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData }; // return fetchData function
};

export default useFetch;
