import { MainApp } from "./TabRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddLaporan from "../pages/AddLaporan";
import History from "../pages/History";
import Profile from "../pages/Profile";

export const dataRoutesStack = [
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Register",
    component: Register,
  },
  {
    name: "MainApp",
    component: MainApp,
  },
];

export const dataRoutesTab = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "AddLaporan",
    component: AddLaporan,
  },
  {
    name: "History",
    component: History,
  },
  {
    name: "Profile",
    component: Profile,
  },
];
