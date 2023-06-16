import React from "react";
import ReactDOM from "react-dom/client";
import "./../_index.css";
import Home from "../routes/Home/Home";
import Error404 from "./../components/Error404/Error404";
import WebProjects from "./../routes/Projects/Projects";
import AboutMe from "./../routes/AboutMe/AboutMe";
import Contact from "./../routes/Contact/Contact";
import MotionProjects from "./../routes/motion projects/MotionProjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/webprojects",
        element: <WebProjects />,
      },
      {
        path: "/motionprojects",
        element: <MotionProjects />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
