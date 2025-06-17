import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={pages} />;

export default Router;
