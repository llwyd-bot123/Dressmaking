import Home from "../pages/Homepage/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Introduction from "../pages/Introduction/Introduction";
import Lesson1 from "../pages/Quarters/quarter1_lessons/Lesson1";
import Quarters from "../pages/Quarters/Quarters";

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
  {
    path: "/introduction",
    element: <Introduction />,
  },
  {
    path: "/quarters",
    element: <Quarters />,
  },
  {
    path: "/q1_lesson1",
    element: <Lesson1 />,
  },
];
