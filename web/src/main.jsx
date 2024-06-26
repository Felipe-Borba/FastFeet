import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "./context";
import "./index.css";
import Login from "./pages/login";
import CreateParcel from "./pages/parcel/create/index";
import ListParcel from "./pages/parcel/list";
import RecipientCreate from "./pages/recipient/create";
import RecipientList from "./pages/recipient/list";
import UserList from "./pages/user/list";
import UserCreate from "./pages/user/userCreate";

const router = createBrowserRouter([
  {
    element: <Context />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
