import { Box, Text } from "@chakra-ui/react";
import ActionButton from "../../../components/ActionButton";
import Image1 from "../../../assets/Panel7Image1.png";
import { Link } from "react-router-dom";

const Panel7 = () => {
  return (
    <Box
      aspectRatio={1920 / 315}
      width={"100%"}
      bgImage={Image1}
      bgSize={"100%"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      paddingX={"400px"}
    >
      <Text
        color={"white"}
        maxWidth={"50%"}
        maxHeight={"100%"}
        fontSize={"40px"}
      >
        Delivering the <b>best security solutions</b> to our clients
      </Text>
      <Link to={"/contacts"}>
        <ActionButton fontSize={"12px"} height={"40px"}>
          MAKE AN APPOINTMENT
        </ActionButton>
      </Link>
    </Box>
  );
};

export default Panel7;
