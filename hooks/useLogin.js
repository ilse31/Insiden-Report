import { useState } from "react";

const useLogin = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleCHange = (key, value) => {
    if (key === "username") {
      if (value.length < 5) {
        setErrors({ ...errors, username: "Username kurang dari 5 karakter" });
      }
    } else if (key === "password") {
      if (value.length < 5) {
        setErrors({ ...errors, password: "Password kurang dari 5 karakter" });
      }
    } else {
      setErrors({ ...errors, [key]: "" });
    }
    setLogin({ ...login, [key]: value });
  };

  const handleSubmit = () => {
    // API.post("/login", Login)
    //   .then((res) => {
    //     console.log(res);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(err);
    //   });
    console.log(errors);
    console.log(login);
  };
  return { handleCHange, handleSubmit, login, errors };
};

export default useLogin;
