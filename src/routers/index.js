import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

const { createBrowserRouter } = require("react-router-dom");
const { Welcome } = require("../components/welcome");

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
