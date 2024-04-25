import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import AboutUspage from "./pages/AboutUspage/AboutUspage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage.tsx/NotFoundPage";
import ServicesPage from "./pages/ServicesPage.tsx/ServicesPage";
import Login from "./pages/LoginPage/LoginPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path:"/about-us", element: <AboutUspage /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
  { path: "/Login", element: <Login /> }
]);

export default router;
