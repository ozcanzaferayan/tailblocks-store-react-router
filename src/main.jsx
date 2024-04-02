import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import ProductAddPage, {
  action as productAddAction,
} from "./pages/ProductAddPage";
import ProductDetailPage, {
  loader as productDetailLoader,
} from "./pages/ProductDetailPage";
import ProductsPage, { loader as productsLoader } from "./pages/ProductsPage";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: productsLoader,
      },
      {
        path: "/products/add",
        element: <ProductAddPage />,
        action: productAddAction,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
        loader: productDetailLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
