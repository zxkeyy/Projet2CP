import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/Logo bt snbg 1.png";
import { GoStack } from "react-icons/go";
import { BsGrid, BsPeople } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
const SideBar = () => {
  const location = useLocation();
  return (
    <Box
      minWidth={"20%"}
      width={"20%"}
      height={"100%"}
      bgColor={"white"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"3%"}
    >
      <Box height={"15%"}>
        <Link to="/">
          <Image height={"100%"} src={Logo} alt="BahaTech" />
        </Link>
      </Box>
      <Link to="/dashboard">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard" ? "teal" : "black"}
        >
          <GoStack size={"25px"} />
          <Text fontSize={"25px"}>DashBoard</Text>
        </Flex>
      </Link>
      <Link to="/dashboard/products">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard/products" ? "teal" : "black"}
        >
          <BsGrid size={"25px"} />
          <Text fontSize={"25px"}>Products</Text>
        </Flex>
      </Link>
      <Link to="/dashboard">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard/customers" ? "teal" : "black"}
        >
          <BsPeople size={"25px"} />
          <Text fontSize={"25px"}>Customers</Text>
        </Flex>
      </Link>
      <Link to="/dashboard/orders">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard/orders" ? "teal" : "black"}
        >
          <MdOutlineShoppingCart size={"25px"} />
          <Text fontSize={"25px"}>Orders</Text>
        </Flex>
      </Link>
      <Link to="/dashboard">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard/settings" ? "teal" : "black"}
        >
          <LuSettings size={"25px"} />
          <Text fontSize={"25px"}>Settings</Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default SideBar;
