import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage.tsx/NotFoundPage";
import ServicesPage from "./pages/ServicesPage.tsx/ServicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
]);

export default router;
