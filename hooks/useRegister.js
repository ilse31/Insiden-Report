import { useState } from "react";
import { API } from "../helpers/API";
const useRegister = (navigation) => {
  const [register, setRegister] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role_id: ""
  });
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleChangeLogin = (key, value) => {
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

  const handleCHangeRegister = (key, value) => {
    setRegister({ ...login, [key]: value });
  };

  const handleSubmitLogin = () => {
    API.post("/login", login)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigation.navigate("MainApp");
          setLogin({
            username: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });
  };
  const handleSubmitRegister = () => {
    API.post("/register", login)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigation.navigate("Login");
          setRegister({
            name: "",
            username: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });
  };

  return {
    handleCHangeRegister,
    handleChangeLogin,
    register,
    login,
    errors,
    handleSubmitLogin,
    handleSubmitRegister,
  };
};

export default useRegister;
