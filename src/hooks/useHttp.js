import { useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async (endpoint, method = "GET", body = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendRequest,
    isLoading,
    data,
    error,
  };
};
