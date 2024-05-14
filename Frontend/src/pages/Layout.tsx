import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";


const Layout = () => {
  return (
    <Box  bgColor={"bg.500"}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
