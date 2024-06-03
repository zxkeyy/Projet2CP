<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
=======
import {createBrowserRouter} from "react-router-dom";
>>>>>>> 6616365 (adding google sign in front and back)
import HomePage from "./pages/Homepage/Homepage";
import AboutUspage from "./pages/AboutUspage/AboutUspage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage.tsx/NotFoundPage";
import ServicesPage from "./pages/ServicesPage.tsx/ServicesPage";
<<<<<<< HEAD
import ProductPage from "./pages/ProductPage/ProductPage";
import StorePage from "./pages/StorePage.tsx/StorePage";
=======
>>>>>>> 6616365 (adding google sign in front and back)
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import Login from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import ForgetPassword from "./pages/ForgetPasswordpage/ForgetPassword";
import ActivateForgetPassword from "./pages/ForgetPasswordpage/ActivateForgetPassword";
<<<<<<< HEAD
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import ProductDashboard from "./pages/DashBoardPage/Components/ProductDashboard";
import AddProductPage from "./pages/DashBoardPage/Components/AddProductPage";
=======

>>>>>>> 6616365 (adding google sign in front and back)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
<<<<<<< HEAD
      { path: "/about-us", element: <AboutUspage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/store/product/:id", element: <ProductPage /> },
      { path: "/store", element: <StorePage /> },
=======
      { path:"/about-us", element: <AboutUspage /> },
      { path: "/services", element: <ServicesPage /> },
>>>>>>> 6616365 (adding google sign in front and back)
      { path: "/EditProfile", element: <EditProfilePage /> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forget-password", element: <ForgetPassword /> },
<<<<<<< HEAD
  { path: "/activate-forget-password", element: <ActivateForgetPassword /> },
  {
    path: "/dashboard",
    element: <DashBoardPage />,
    children: [
      { index: true, element: <div>Dashboard</div> },
      { path: "/dashboard/products", element: <ProductDashboard /> },
      { path: "/dashboard/products/add-product", element: <AddProductPage /> },
    ],
  },
=======
  { path: "/activate-forget-password", element: <ActivateForgetPassword/> }
>>>>>>> 6616365 (adding google sign in front and back)
]);

export default router;
