import { Box, Text } from "@chakra-ui/react";
import ActionButton from "../../../components/ActionButton";
import Image1 from "../../../assets/Panel7Image1.png";

const Panel4 = () => {
  return (
    <Box
      aspectRatio={1920 / 315}
      width={"100%"}
      bgImage={Image1}
      bgSize={"100%"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
<<<<<<< HEAD
=======
      paddingX={"400px"}
>>>>>>> 6616365 (adding google sign in front and back)
    >
      <Text
        color={"white"}
        maxWidth={"50%"}
        maxHeight={"100%"}
<<<<<<< HEAD
        fontSize={{ base: "15px", md: "20px", lg: "35px" }}
      >
        Delivering the <b>best security solutions</b> to our clients
      </Text>
      <ActionButton
        fontSize={{ base: "10px", md: "12px", lg: "15px" }}
        height={"18%"}
      >
=======
        fontSize={"40px"}
      >
        Delivering the <b>best security solutions</b> to our clients
      </Text>
      <ActionButton fontSize={"12px"} height={"18%"}>
>>>>>>> 6616365 (adding google sign in front and back)
        MAKE AN APPOINTMENT
      </ActionButton>
    </Box>
  );
};

export default Panel4;
