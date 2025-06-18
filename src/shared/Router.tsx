import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Chat from "../pages/Chat";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={pages} />;

export default Router;
