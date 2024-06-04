import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useToast,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "../../assets/Logo bt snbg 1.png";
import Cart from "./Cart";
import { IoPersonCircle } from "react-icons/io5";
import { ModalProvider } from "./ModalContext";
import CartContent from "./CartContent";
import useUserData from "../../Hooks/useUserData";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { data } = useUserData();
  const location = useLocation();
  const toast = useToast();
  const navigate = useNavigate();

  const LogOut = () => {
    try {
      axios.get("http://localhost:5000/user/logOut", { withCredentials: true });
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
      <Box height={{ base: "60px", lg: "100px" }}>
        <Link to="/">
          <Image height={"100%"} src={Logo} alt="BahaTech" />
        </Link>
      </Box>
      <Show above="md">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          //width={"25%"}
          height={"100%"}
        >
          <Link to="/">
            <NavButton aria-selected={location.pathname === "/"}>
              HOME
            </NavButton>
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
          minWidth={"200px"}
        >
          <Box
            height={{ base: "25px", lg: "35px" }}
            width={{ base: "25px", lg: "35px" }}
          >
            <ModalProvider>
              <Cart
                height={{ base: "25px", lg: "35px" }}
                width={{ base: "25px", lg: "35px" }}
              />
              <CartContent />
            </ModalProvider>
          </Box>
          {data ? (
            <Menu>
              <MenuButton
                color="#009688"
                bg="bg.500"
                fontSize="xl"
                as={Button}
                rightIcon={<IoPersonCircle size={35} />}
              >
                {data?.username}
              </MenuButton>
              <MenuList>
                {data?.role === "admin" ? (
                  <Link to="/dashboard">
                    <MenuItem>DashBoard</MenuItem>
                  </Link>
                ) : null}
                <Link to="/profile/Edit-profile">
                  <MenuItem>Edit profile</MenuItem>
                </Link>
                <MenuItem onClick={LogOut}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link to="/Login">
              <Button
                bgColor={"#292734"}
                color={"white"}
                colorScheme="teal"
                borderRadius={"15px"}
                fontSize={"md"}
                size={{ base: "sm", lg: "md" }}
                rightIcon={<IoPersonCircle color="#009688" size={35} />}
              >
                LOGIN
              </Button>
            </Link>
          )}
        </Box>
      </Show>
      <Show below="md">
        <Box
          height={{ base: "25px", lg: "35px" }}
          width={{ base: "25px", lg: "35px" }}
        >
          <ModalProvider>
            <Cart
              height={{ base: "25px", lg: "35px" }}
              width={{ base: "25px", lg: "35px" }}
            />
            <CartContent />
          </ModalProvider>
        </Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
          />
          <MenuList>
            <MenuItem
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/about-us");
              }}
            >
              ABOUT US
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/services");
              }}
            >
              SERVICES
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/store");
              }}
            >
              STORE
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/contacts");
              }}
            >
              CONTACTS
            </MenuItem>
            <Divider />

            {data?.role === "admin" ? (
              <Link to="/dashboard">
                <MenuItem>DashBoard</MenuItem>
              </Link>
            ) : null}

            {data ? (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/EditProfile");
                  }}
                >
                  Edit Account
                </MenuItem>
                <MenuItem onClick={LogOut}>Logout</MenuItem>
              </>
            ) : (
              <MenuItem
                onClick={() => {
                  navigate("/Login");
                }}
              >
                LOGIN
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Show>
    </HStack>
  );
};

export default Navbar;
