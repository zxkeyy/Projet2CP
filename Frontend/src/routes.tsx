import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import AboutUspage from "./pages/AboutUspage/AboutUspage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage.tsx/NotFoundPage";
import ServicesPage from "./pages/ServicesPage.tsx/ServicesPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import StorePage from "./pages/StorePage.tsx/StorePage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import Login from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import ForgetPassword from "./pages/ForgetPasswordpage/ForgetPassword";
import ActivateForgetPassword from "./pages/ForgetPasswordpage/ActivateForgetPassword";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import ProductDashboard from "./pages/DashBoardPage/Components/ProductDashboard";
import AddProductPage from "./pages/DashBoardPage/Components/AddProductPage";
import OrderDashboard from "./pages/DashBoardPage/Components/OrderDashboard";
import EditProductsPage from "./pages/DashBoardPage/Components/EditProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about-us", element: <AboutUspage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/store/product/:id", element: <ProductPage /> },
      { path: "/store", element: <StorePage /> },
      { path: "/EditProfile", element: <EditProfilePage /> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/activate-forget-password", element: <ActivateForgetPassword /> },
  {
    path: "/dashboard",
    element: <DashBoardPage />,
    children: [
      {
        index: true,
        element: <div>dashboard</div>,
      },
      { path: "/dashboard/products", element: <ProductDashboard /> },
      { path: "/dashboard/products/add-product", element: <AddProductPage /> },
      { path: "/dashboard/products/edit-product/:id", element: <EditProductsPage /> },
      { path: "/dashboard/orders", element: <OrderDashboard /> },
    ],
  },
]);

export default router;
