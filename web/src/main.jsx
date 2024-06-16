import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import CreateParcel from "./pages/parcelCreate";
import UserHome from "./pages/user/home";
import UserCreate from "./pages/user/userCreate";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-parcel",
    element: <CreateParcel />,
  },
  {
    path: "/user-create",
    element: <UserCreate />,
  },
  {
    path: "/user/home",
    element: <UserHome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
