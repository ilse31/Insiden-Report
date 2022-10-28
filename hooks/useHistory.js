import { useEffect, useState } from "react";
import { API } from "../helpers/API";

const useHistory = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHistory = () => {
    API.get("/history")
      .then((res) => {
        setHistory(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return { history, isLoading };
};

export default useHistory;
