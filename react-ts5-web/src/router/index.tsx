import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const lazyLoad = (moduleName: string) => {
  const Module = lazy(() => import(`@/views/${moduleName}`));
  return <Module />;
};

const Appraisal = ({ children }: any) => {
  const token = localStorage.getItem("token");

  // return token ? children : <Navigate to="/login" />;
  return children;
};

const routes = [
  {
    path: "/login",
    element: lazyLoad("login"),
  },
  {
    path: "/",
    element: lazyLoad("dashboard"),
  },

  // {
  //   path: "/",
  //   element: <Appraisal>{lazyLoad("sand-box")}</Appraisal>,
  //   children: [
  //     {
  //       path: "",
  //       element: <Navigate to="home" />,
  //     },
  //     {
  //       path: "*",
  //       element: lazyLoad("sand-box/nopermission"),
  //     },
  //   ],
  // },
  // {
  //   path: "/news",
  //   element: lazyLoad("news"),
  // },
  // {
  //   path: "/news/detail:id",
  //   element: lazyLoad("news/detail"),
  // },
  {
    path: "*",
    element: lazyLoad("not-found"),
  },
];

export default routes;
