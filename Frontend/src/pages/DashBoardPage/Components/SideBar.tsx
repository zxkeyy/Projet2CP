import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo bt snbg 1.png";
import { GoStack } from "react-icons/go";
import { BsGrid } from "react-icons/bs";
import { MdLogout, MdMessage, MdOutlineShoppingCart } from "react-icons/md";
import axios from "axios";

const SideBar = () => {
  const location = useLocation();
  const toast = useToast();
  const navigate = useNavigate();

  const LogOut = () => {
    try {
      axios.get("http://localhost:5000/user/logOut", { withCredentials: true });
      navigate("/");
      window.location.reload();
    } catch (error) {
      toast({
        title: "Unexpected error",
        description: "error from the server",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
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
          alignItems={"center"}
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
          alignItems={"center"}
        >
          <BsGrid size={"25px"} />
          <Text fontSize={"25px"}>Products</Text>
        </Flex>
      </Link>
      <Link to="/dashboard/orders">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard/orders" ? "teal" : "black"}
          alignItems={"center"}
        >
          <MdOutlineShoppingCart size={"25px"} />
          <Text fontSize={"25px"}>Orders</Text>
        </Flex>
      </Link>
      <Link to="/dashboard/messages">
        <Flex
          width={"150px"}
          gap={"5%"}
          color={location.pathname == "/dashboard/messages" ? "teal" : "black"}
          alignItems={"center"}
        >
          <MdMessage size={"25px"} />
          <Text fontSize={"25px"}>Messages</Text>
        </Flex>
      </Link>
      <Flex
        marginTop={"100%"}
        onClick={LogOut}
        cursor={"pointer"}
        width={"150px"}
        gap={"5%"}
        color={"red"}
        alignItems={"center"}
      >
        <MdLogout size={"25px"} />
        <Text fontSize={"25px"}>Logout</Text>
      </Flex>
    </Box>
  );
};

export default SideBar;
