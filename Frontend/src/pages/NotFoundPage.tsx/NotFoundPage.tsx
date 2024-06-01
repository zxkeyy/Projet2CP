import Navbar from "../../components/Navbar/Navbar";
import { Box, Image, Text } from "@chakra-ui/react";
import ActionButton from "../../components/ActionButton";
import Footer from "../../components/Footer";
import Image1 from "../../assets/Camera.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <Box height={"3px"} width="100%" bgColor="#292734"></Box>
      <Box
        bgColor={"bg.500"}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="5%"
        aspectRatio={1920 / 500}
      >
        <Box width="60%" display="flex" justifyContent="space-between" alignItems={"center"} height={"100%"}>
          <Box height={"100%"}>
            <Image width={"300px"} src={Image1}/>
          </Box>
          <Box>
            <Text fontSize="200px">404</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth="25%"
          >
            <Text fontSize={"50px"} fontWeight="bold">
              Oops...
            </Text>
            <Text fontSize="20px">We're sorry, but something went wrong.</Text>
            <Link to="/">
              <ActionButton>HOMEPAGE -</ActionButton>
            </Link>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default NotFoundPage;
