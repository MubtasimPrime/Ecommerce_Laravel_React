import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../components/shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/newArrivals.json"),
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
  },
]);

export default router;
