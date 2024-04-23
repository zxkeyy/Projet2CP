import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import AboutUspage from "./pages/AboutUspage/AboutUspage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/about-us",
    element: <Layout />,
    children: [{ index: true, element: <AboutUspage /> }],
  },
]);

export default router;
