import { useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async (endpoint, method = "GET", body = {}) => {
    setIsLoading(true);
    setError(null);

    const requestObj = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      if (method === "POST") {
        requestObj.body = JSON.stringify(body);
      }

      const response = await fetch(endpoint, requestObj);

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
