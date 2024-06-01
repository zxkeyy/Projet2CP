import {createBrowserRouter} from "react-router-dom";
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
import Myorderspage from "./pages/Myorderspage/Myorderspage";
import ProfilePageLayout from "./pages/ProfilePageLayout";
import Contactspage from "./pages/Contactspage/Contactspage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path:"/about-us", element: <AboutUspage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/store/product/:id", element: <ProductPage /> },
      {path: "/store", element: <StorePage />},
      {path: "/contacts", element: <Contactspage />},
      { path: "/profile", element: <ProfilePageLayout />, children:[
        { path:"/profile/Edit-profile", element: <EditProfilePage /> },
        { path: "/profile/my-orders", element: <Myorderspage /> },
      ] },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/activate-forget-password", element: <ActivateForgetPassword/> }
]);

export default router;
