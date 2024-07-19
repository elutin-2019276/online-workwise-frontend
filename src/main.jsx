import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//El contexto de rutas
import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
//Toast
import { Toaster } from "react-hot-toast";
//Bostrap diseño Login
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const Main = () => {
  const elementRoutes = useRoutes(routes);
  return (
    <>
      {elementRoutes}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  </React.StrictMode>
);
