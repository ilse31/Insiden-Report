import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { API } from "../helpers/API";

const useHistory = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHistory = async () => {
    API.get("/history")
      .then((res) => {
        setHistory(res.data);
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
