import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import AboutUspage from "./pages/AboutUspage/AboutUspage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage.tsx/NotFoundPage";
import ServicesPage from "./pages/ServicesPage.tsx/ServicesPage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import Login from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUpPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path:"/about-us", element: <AboutUspage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/EditProfile", element: <EditProfilePage /> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> }
]);

export default router;
