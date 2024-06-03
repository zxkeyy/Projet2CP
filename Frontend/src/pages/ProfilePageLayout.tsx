import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import useUserData from "../Hooks/useUserData";
import { Link, Outlet } from "react-router-dom";
import Loadingpage from "./Loadingpage/Loadingpage";

import { ModalProvider } from "../components/Navbar/ModalContext";

const ProfilePageLayout = () => {
  const { data, isLoading } = useUserData();

  if (isLoading) {
    return <Loadingpage />;
  }

  return (
    <Flex p="30px" flexDir="column">
      <Flex mb="30px" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="500">
          Home /{" "}
          <Box as="span" color="#009688">
            {" "}
            My Account{" "}
          </Box>
        </Text>
        <Text fontSize="lg" fontWeight="500">
          Welcome{" "}
          <Box as="span" color="#009688">
            {" "}
            {data.username}{" "}
          </Box>
        </Text>
      </Flex>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} p="10px">
          <Link to="/profile/edit-profile">
            <Text
              fontWeight="500"
              fontSize={{ base: "md", md: "lg" }}
              cursor="pointer"
              _hover={{ color: "#009688" }}
              mb="10px"
            >
              Edit Profile
            </Text>
          </Link>
          <Link to="/profile/my-orders">
            <Text
              fontSize={{ base: "md", md: "lg" }}
              cursor="pointer"
              fontWeight="500"
              _hover={{ color: "#009688" }}
            >
              My Orders
            </Text>
          </Link>
        </GridItem>
        <GridItem colSpan={4} mr={{ base: "0", md: "50px" }}>
          <ModalProvider>
            <Outlet />
          </ModalProvider>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default ProfilePageLayout;
