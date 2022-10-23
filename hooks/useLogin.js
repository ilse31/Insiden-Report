import { useState } from "react";

const useLogin = () => {
  const [Login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleCHange = (key, value) => {
    setLogin({ ...Login, [key]: value });
  };

  const handleSubmit = () => {
    API.post("/login", Login)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  return { handleCHange, handleSubmit, Login };
};

export default useLogin;
