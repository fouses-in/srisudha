import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("request", requestConfig);
      const response = await axios({
        method: requestConfig.method ? requestConfig.method : "get",
        headers: requestConfig.headers ? requestConfig.headers : {},
        url: requestConfig.url,
        data: requestConfig.body ? requestConfig.body : null,
        params: requestConfig.params ?? {},
      });

      applyData?.(response.data);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setError(err.response?.data?.message || "Something went wrong!");
      setErrorType(err.response?.data?.errorType || "Oops,Sorry");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    setError,
    errorType,
  };
};

export default useHttp;
