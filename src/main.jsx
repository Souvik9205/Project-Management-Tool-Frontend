import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Landing from "./pages/Landing.jsx";
import Signup from "./formats/Signup.jsx";
import Login from "./formats/Login.jsx";
import CreateProject from "./pages/projects/CreateProject.jsx";
import UpdateProject from "./pages/projects/UpdateProject.jsx";
import DeleteProject from "./pages/projects/DeleteProject.jsx";
import ViewProject from "./pages/projects/ViewProject.jsx";
import CreateTask from "./pages/tasks/CreateTask.jsx";
import DeleteTask from "./pages/tasks/DeleteTask.jsx";
import UpdateTsk from "./pages/tasks/UpdateTsk.jsx";
import CheackTask from "./pages/tasks/CheackTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: <CreateProject />,
  },
  {
    path: "/update/:id",
    element: <UpdateProject />,
  },
  {
    path: "/delete/:id",
    element: <DeleteProject />,
  },
  {
    path: "/project/:id",
    element: <ViewProject />,
  },
  {
    path: "/project/:projectId/taskcreate",
    element: <CreateTask />,
  },
  {
    path: "/project/:projectId/update/:taskId",
    element: <UpdateTsk />,
  },
  {
    path: "/project/:projectId/delete/:taskId",
    element: <DeleteTask />,
  },
  {
    path: "/project/:projectId/task/:taskId/check",
    element: <CheackTask />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
