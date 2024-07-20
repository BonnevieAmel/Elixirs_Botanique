import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./Index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import PlantPage from "./pages/PlantPage";
import PlantsPage from "./pages/PlantsPage";
import PlantForm from "./pages/PlantForm";
import Recipes from "./pages/Recipes";
import DetailsRecipe from "./pages/DetailsRecipe";
import TeaForm from "./pages/TeaForm";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <PlantPage />,
        path: "/Plants/:id",
      },
      {
        element: <PlantsPage />,
        path: "/Plants",
      },
      {
        element: <PlantForm />,
        path: "/Plants/edit/:id",
      },
      {
        element: <PlantForm />,
        path: "/Plants/new",
      },
      {
        element: <Recipes />,
        path: "/Recipes",
      },
      {
        element: <DetailsRecipe />,
        path: "/Recipes/:id",
      },
      {
        element: <TeaForm />,
        path: "/teas/new",
      },
      {
        element: <TeaForm />,
        path: "/Recipe/edit/:id",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <AnimatePresence />
  </React.StrictMode>
);
