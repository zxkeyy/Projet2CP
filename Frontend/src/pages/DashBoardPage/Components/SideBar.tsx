import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo bt snbg 1.png";
import { GoStack } from "react-icons/go";
import { BsGrid, BsPeople } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
const SideBar = () => {
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
      <Flex width={"50%"} gap={"5%"}>
        <GoStack size={"25px"} />
        <Text fontSize={"25px"}>DashBoard</Text>
      </Flex>
      <Flex width={"50%"} gap={"5%"}>
        <BsGrid size={"25px"} />
        <Text fontSize={"25px"}>Products</Text>
      </Flex>
      <Flex width={"50%"} gap={"5%"}>
        <BsPeople size={"25px"} />
        <Text fontSize={"25px"}>Customers</Text>
      </Flex>
      <Flex width={"50%"} gap={"5%"}>
        <MdOutlineShoppingCart size={"25px"} />
        <Text fontSize={"25px"}>Orders</Text>
      </Flex>
      <Flex width={"50%"} gap={"5%"}>
        <LuSettings size={"25px"} />
        <Text fontSize={"25px"}>Settings</Text>
      </Flex>
    </Box>
  );
};

export default SideBar;
