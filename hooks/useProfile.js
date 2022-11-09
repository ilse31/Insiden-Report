import React, { useEffect, useState } from "react";
import { API } from "../helpers/API";

const useProfile = () => {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProfile = async () => {
    await API.get("/user")
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return { profile, isLoading };
};

export default useProfile;
