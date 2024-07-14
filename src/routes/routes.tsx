import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductsDashboard from "../pages/ProductsDashboard";

const router = createBrowserRouter([
  {
    path: "/", //? Absolute path
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home", //? Relative path
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "check-out",
        element: <Checkout />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "products-dashboard",
        element: <ProductsDashboard />,
      },
    ],
  },
]);

export default router;
