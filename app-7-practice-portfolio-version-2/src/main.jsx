import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Technologies from "./componetns/Technologies.jsx";
import Home from "./componetns/Home.jsx";
import Support from "./Routes/Support.jsx";
import Projects from "./componetns/Projects.jsx";
import Experience from "./componetns/Experience.jsx";
import Education from "./componetns/Education.jsx";
import Contact from "./componetns/Contact.jsx";
import Certificates from "./componetns/Certificates.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Support></Support>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Technologies",
        element: <Technologies></Technologies>,
      },
      {
        path: "Projects",
        element: <Projects></Projects>,
      },
      {
        path: "Experience",
        element: <Experience></Experience>,
      },
      {
        path: "Education",
        element: <Education></Education>,
      },
      {
        path: "Certificates",
        element: <Certificates></Certificates>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
