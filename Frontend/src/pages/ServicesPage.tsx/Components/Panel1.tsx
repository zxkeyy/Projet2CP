import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Image1 from "../../../assets/Panel7Image1.png";

const Panel1 = () => {
  return (
    <Box
      aspectRatio={1920 / 315}
      width={"100%"}
      bgImage={Image1}
      bgSize={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
<<<<<<< HEAD

    >
      <Heading fontSize={{base:"30px", md:"45px", lg:"60px"}} textColor={"white"}>
=======
      paddingX={"400px"}
    >
      <Heading fontSize={"60px"} textColor={"white"}>
>>>>>>> 6616365 (adding google sign in front and back)
        Our Services
      </Heading>
      <Text textColor={"white"} fontSize={"20px"}>
        <Link textColor="brand.500">Home</Link> / <Link>Our Services</Link>
      </Text>
    </Box>
  );
};

export default Panel1;
