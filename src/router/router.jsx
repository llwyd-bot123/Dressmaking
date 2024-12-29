import Home from "../pages/Homepage/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Introduction from "../pages/Introduction/Introduction";
import Lesson1 from "../pages/Quarters/quarter1_lessons/Lesson1";
import Quarter1 from "../pages/Quarters/Quarter1";
import Quiz1 from "../pages/Quizzes/Quarter1_Quizzes/Quiz1";

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
    path: "/quarter1",
    element: <Quarter1 />,
  },
  {
    path: "/q1_lesson1",
    element: <Lesson1 />,
  },
  {
    path: "/q1_quiz1",
    element: <Quiz1 />,
  },
];
