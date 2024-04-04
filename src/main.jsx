import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
