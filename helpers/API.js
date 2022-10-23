import axios from "axios";
// import { AsyncStorage } from "react-native";

export const API = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// API.interceptors.request.use(async (config) => {
// const token = JSON.parse(AsyncStorage.getItem("token_data"));
// const { expires_at, refresh_token } = token;
// let accessToken = token.access_token;
// if (expires_at < Date.now()) {
//   accessToken = await getRefreshToken(refresh_token);
//   config.headers.Authorization = `Bearer ${accessToken}`;
// } else {
//   config.headers.Authorization = `Bearer ${accessToken}`;
//   console.log("Token not expired");
// return config;
// });

// const getRefreshToken = async (refreshToken) => {
//   try {
//     const payload = {
//       refresh_token: refreshToken,
//     };
//     const res = await API.post("/refresh", payload);
//     AsyncStorage.setItem("token_data", JSON.stringify(res.data.data));
//     console.log("new token", res.data.data.access_token);
//     return res.data.data.access_token;
//   } catch (error) {
//     console.log(error);
//     window.location.href = "/login";
//   }
// };
