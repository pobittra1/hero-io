import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

const container = document.getElementById("root");


createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);