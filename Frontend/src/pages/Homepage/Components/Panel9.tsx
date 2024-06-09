import { Box, Heading, Text } from "@chakra-ui/react";
import ActionButton from "../../../components/ActionButton";
import Image1 from "../../../assets/Panel9Image1.png";
import Image2 from "../../../assets/Panel9Image2.png";
import Image3 from "../../../assets/Panel9Image3.png";
import Image4 from "../../../assets/Panel9Image4.png";
import { Link } from "react-router-dom";

const Panel9 = () => {
  return (
    <Box
      aspectRatio={1920 / 800}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading marginTop={"5%"}>Security Products</Heading>
      <Box
        display={"flex"}
        width={"70%"}
        height={"70%"}
        justifyContent={"space-between"}
        marginTop={"2%"}
      >
        <Box
          width={"20%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box
            aspectRatio={1 / 1}
            bgImage={Image1}
            bgSize={"100%"}
            width={"100%"}
          ></Box>
          <Heading textAlign={"center"} fontSize={"18px"} height={"50px"}>
            Aluminum Housing Home Security Camera
          </Heading>
          <Text>$89.00 - $99.00</Text>
          <Link to={"/store"}>
            <ActionButton width={"90%"}>Select Options</ActionButton>
          </Link>
        </Box>
        <Box
          width={"20%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box
            aspectRatio={1 / 1}
            bgImage={Image2}
            bgSize={"100%"}
            width={"100%"}
          ></Box>
          <Heading textAlign={"center"} fontSize={"18px"} height={"50px"}>
            Digital Safety Door Lock
          </Heading>
          <Text>$69.00 - $79.00</Text>
          <Link to={"/store"}>
            <ActionButton width={"90%"}>Select Options</ActionButton>
          </Link>
        </Box>
        <Box
          width={"20%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box
            aspectRatio={1 / 1}
            bgImage={Image3}
            bgSize={"100%"}
            width={"100%"}
          ></Box>
          <Heading textAlign={"center"} fontSize={"18px"} height={"50px"}>
            Wireless Audio-Recording Night WebCam
          </Heading>
          <Text>$74.99 - $82.25</Text>
          <Link to={"/store"}>
            <ActionButton width={"90%"}>Select Options</ActionButton>
          </Link>
        </Box>
        <Box
          width={"20%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box
            aspectRatio={1 / 1}
            bgImage={Image4}
            bgSize={"100%"}
            width={"100%"}
          ></Box>
          <Heading textAlign={"center"} fontSize={"18px"} height={"50px"}>
            Invasion Proof Digital Safe
          </Heading>
          <Text>$189.00 - $239.00</Text>
          <Link to={"/store"}>
            <ActionButton width={"90%"}>Select Options</ActionButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Panel9;
