import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import CreateParcel from "./pages/parcel/create/index";
import UserList from "./pages/user/list";
import UserCreate from "./pages/user/userCreate";
import RecipientList from "./pages/recipient/list";
import RecipientCreate from "./pages/recipient/create";
import ListParcel from "./pages/parcel/list";
import "./index.css";
import { AuthProvider } from "./context/Auth/auth";

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
    path: "/parcel/create",
    element: <CreateParcel />,
  },
  {
    path: "/parcel/list",
    element: <ListParcel />,
  },
  {
    path: "/user/create",
    element: <UserCreate />,
  },
  {
    path: "/user/list",
    element: <UserList />,
  },
  {
    path: "/recipient/list",
    element: <RecipientList />,
  },
  {
    path: "/recipient/create",
    element: <RecipientCreate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
