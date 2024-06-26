import { Heading, Box, Text } from "@chakra-ui/react";
import { BiShieldQuarter } from "react-icons/bi";
import Image1 from "../../../assets/Panel4Image1.png";
import ActionButton from "../../../components/ActionButton";
import { Link } from "react-router-dom";

const Panel4 = () => {
  return (
    <Box
      bgImage={Image1}
      aspectRatio={1920 / 638}
      bgSize={"100%"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"40%"}
        height={"65%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <BiShieldQuarter color="#009688" size={"30%"} />
        <Heading
          color={"white"}
          fontSize={"60px"}
          textAlign={"center"}
          maxHeight={"30%"}
        >
          Making Your Life Safer
        </Heading>
        <Text
          color={"white"}
          fontSize={"22px"}
          maxWidth={"65%"}
          maxHeight={"30%"}
          textAlign={"center"}
        >
          We provide customized security solutions to help protect your people
          and property.
        </Text>
        <Link to={"/about-us"}>
          <ActionButton fontSize={"15px"}>LEARN MORE</ActionButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Panel4;
