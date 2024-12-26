import Home from "../pages/Homepage/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
