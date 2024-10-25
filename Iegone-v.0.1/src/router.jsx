import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import React from "react";
import CreateFolderForm from "./templates/CreateFolderForm";
import Home from "./view/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new-job",
        element: <CreateFolderForm/>,
      },
      {
        path: "/*",
        element: <h1>page not found</h1>,
      },
    ],
  },
]);

export default router;
