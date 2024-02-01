import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Main;
