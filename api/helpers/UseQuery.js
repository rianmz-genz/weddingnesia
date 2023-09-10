import { useState, useEffect } from "react";
import axios from "axios";

function useQuery(option) {
  const {
    baseUrl,
    method = "GET",
    type = "application/json",
    authorization,
    reqBody,
  } = option;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios({
          baseURL: baseUrl,
          method: method,
          timeout: 5000,
          timeoutErrorMessage: "Timeout Please Try Again",
          data: reqBody,
          headers: {
            "Content-Type": type,
            Authorization: authorization,
            Accept: "application/json",
          },
        }); // Menggunakan Axios untuk melakukan GET request
        setData(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [baseUrl, method, type, authorization, reqBody]);

  return { data, isLoading, error };
}

export default useQuery;
