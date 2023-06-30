import React from "react";
import ReactDOM from "react-dom/client";
import "./../_index.css";
import Error404 from "./../components/Error404/Error404";
import Home from "../routes/Home/Home";
import AboutMe from "./../routes/AboutMe/AboutMe";
import WebProjects from "./../routes/webProjects/WebProjects";
import MotionProjects from "./../routes/motionProjects/MotionProjects";
import Contact from "./../routes/Contact/Contact";
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
