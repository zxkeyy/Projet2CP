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
import OrderDetailsPage from "./pages/DashBoardPage/Components/OrderDetailsPage";
import DashBoard from "./pages/DashBoardPage/Components/DashBoard";
import ProfilePageLayout from "./pages/ProfilePageLayout";
import Myorderspage from "./pages/Myorderspage/Myorderspage";
import SuccessPage from "./pages/PaymentPages.tsx/SuccessPage";
import CancelPage from "./pages/PaymentPages.tsx/CancelPage";
import Contactspage from "./pages/Contactspage.tsx/Contactspage";
import MessagesPage from "./pages/DashBoardPage/Components/MessagesPage";

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
      { path: "/success", element: <SuccessPage /> },
      { path: "/cancel", element: <CancelPage /> },
      { path: "/contacts", element: <Contactspage /> },
      {
        path: "/profile",
        element: <ProfilePageLayout />,
        children: [
          { path: "/profile/Edit-profile", element: <EditProfilePage /> },
          { path: "/profile/my-orders", element: <Myorderspage /> },
        ],
      },
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
        element: <DashBoard />,
      },
      { path: "/dashboard/products", element: <ProductDashboard /> },
      { path: "/dashboard/products/add-product", element: <AddProductPage /> },
      {
        path: "/dashboard/products/edit-product/:id",
        element: <EditProductsPage />,
      },
      { path: "/dashboard/orders", element: <OrderDashboard /> },
      { path: "/dashboard/orders/:id", element: <OrderDetailsPage /> },
      { path: "/dashboard/messages", element: <MessagesPage/>}
    ],
  },
]);

export default router;
