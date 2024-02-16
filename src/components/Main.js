import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Browser from "./Browser";
import CheckTailwind from "./CheckTailwind";
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
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/checktailwind",
      element: <CheckTailwind />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //     } else {
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);
  return <RouterProvider router={appRouter} />;
};

export default Main;
