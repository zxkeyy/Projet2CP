import { Box, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "../../assets/Logo bt snbg 1.png";
import Cart from "./Cart";
import Tools from "./Tools";
import { IoPersonCircle } from "react-icons/io5";
import { ModalProvider } from './ModalContext';
import CartContent from './CartContent';
import useUserData from "../../hooks/useUserData"
import axios from "axios";

const Navbar = () => {

  const { data } = useUserData();
  const location = useLocation();
  const toast = useToast();

  const LogOut = () => {
    try {
      axios.get('http://localhost:5000/user/logOut', { withCredentials: true });
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
  }
  return (
    <HStack
      bgColor={"bg.500"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"100px"}
      paddingX={5}
      position={"sticky"}
      top={0}
      zIndex={999}
    >
      <Box height={"100px"}>
        <Link to="/">
          <Image height={"100%"} src={Logo} alt="BahaTech" />
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"25%"}
        height={"100%"}
      >
        <Link to="/">
          <NavButton aria-selected={location.pathname === "/"}>HOME</NavButton>
        </Link>
        <Link to="/about-us">
          <NavButton aria-selected={location.pathname === "/about-us"}>
            ABOUT US
          </NavButton>
        </Link>
        <Link to="/services">
          <NavButton aria-selected={location.pathname === "/services"}>
            SERVICES
          </NavButton>
        </Link>
        <Link to="/store">
          <NavButton aria-selected={location.pathname === "/store"}>
            STORE
          </NavButton>
        </Link>
        <Link to="/contacts">
          <NavButton aria-selected={location.pathname === "/contacts"}>
            CONTACTS
          </NavButton>
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"15%"}
        minWidth={"250px"}

      >
        <Tools height={"35px"} width={"35px"} />
        <ModalProvider>
          <Cart height={"35px"} width={"35px"}  />
          <CartContent/>
        </ModalProvider>
        {data ? (
          <Menu >
          <MenuButton color="#009688" bg="#000000" as={Button} rightIcon={<IoPersonCircle size={30} />}>
            {data?.username}
          </MenuButton>
          <MenuList>
            <NavLink to="/EditProfile">
              <MenuItem>
                Edit profile 
              </MenuItem>
            </NavLink>
            <MenuItem onClick={LogOut}>Logout</MenuItem>
          </MenuList>
        </Menu>
        ):(
          <Link to="/Login">
            <Button
              bgColor={"black"}
              color={"white"}
              colorScheme="teal"
              borderRadius={"15px"}
              fontSize={"sm"}
              rightIcon={<IoPersonCircle color="#009688" size={30} />}
            >
              LOGIN
            </Button>
          </Link>
        )}
      </Box>
    </HStack>
  );
};

export default Navbar;
