import { Box, Heading, Text } from "@chakra-ui/react";
import { BsKey } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GiDialPadlock } from "react-icons/gi";
import { MdOutlineSettingsRemote } from "react-icons/md";
import Image1 from "../../../assets/Panel8Image1.png";

const Panel8 = () => {
  return (
    <Box aspectRatio={1920 / 510} width={"100%"} display={"flex"}>
      <Box
        width={"50%"}
        height={"100%"}
        bgColor={"brand.500"}
        display={"flex"}
        justifyContent={"space-evenly"}
        padding={"5%"}
      >
        <Box
          width={"25%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <GiDialPadlock size={"80%"} />
          <Text fontSize={"70px"}>935</Text>
          <Text fontSize={"18px"} height={"30px"} textAlign={"center"}>
            Locks Installed
          </Text>
        </Box>
        <Box
          width={"25%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <MdOutlineSettingsRemote size={"80%"} />
          <Text fontSize={"70px"}>236</Text>
          <Text fontSize={"18px"} height={"30px"} textAlign={"center"}>
            Premesis Secured
          </Text>
        </Box>
        <Box
          width={"25%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <BsKey size={"80%"} />
          <Text fontSize={"70px"}>444</Text>
          <Text fontSize={"18px"} height={"30px"} textAlign={"center"}>
            Satisfied Customers
          </Text>
        </Box>
      </Box>
      <Box
        width={"50%"}
        height={"100%"}
        bgImage={Image1}
        bgSize={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        color={"white"}
        padding={"5%"}
      >
        <Text color={"brand.500"} fontWeight={"bold"}>
          TESTIMONIALS
        </Text>
        <Heading>What Clients Say</Heading>
        <Box
          border={"2px"}
          color={"brand.500"}
          width={"7%"}
          borderRadius={"5px"}
        ></Box>
        <Box width={"93%"}>
          <FaQuoteLeft color={"#009688"} size={40} />
        </Box>

        <Text textAlign={"center"} maxWidth={"80%"}>
          Success is no accident. It is hard work, perseverance, learning,
          studying, sacrifice and most of all, love of what you are doing or
          learning to do.
        </Text>
        <Box width={"87%"} display={"flex"} justifyContent={"end"}>
          <FaQuoteRight color={"#009688"} size={40} />
        </Box>
      </Box>
    </Box>
  );
};

export default Panel8;
