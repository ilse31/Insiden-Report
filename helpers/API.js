import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// API.interceptors.request.use(async (config) => {
//   const token = await AsyncStorage.getItem("token");
//   const { expires_at, refresh_token } = token;
//   let accessToken = token.access_token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   if (expires_at < Date.now()) {
//     const { data } = await API.post("/refresh", {
//       refresh_token,
//     });
//     accessToken = data.access_token;
//     await AsyncStorage.setItem("token", JSON.stringify(data));
//   }
//   return config;
// });
