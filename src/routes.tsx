import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import CarrerSupport from "./pages/CarrerSupport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/courses",
    element: <Courses/>,
  },
  {
    path: "/virtual-learning-experience",
    element: < Homepage/>,
  },
  {
    path: "/carrer-support",
    element: <CarrerSupport />,
  },
]);
