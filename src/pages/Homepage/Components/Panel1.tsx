import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Image1 from "../../../assets/Panel1Image1.png";
import Image2 from "../../../assets/Panel1Image2.png";
import Image3 from "../../../assets/Panel1Image3.png";

const Panel1 = () => {
  return (
    <Box aspectRatio={3 / 1} width={"100%"} display={"flex"}>
      <Box
        width={"50%"}
        height={"100%"}
        display={"flex"}
        paddingLeft={"8%"}
        paddingRight={"3%"}
        paddingY={"1%"}
      >
        <Box width={"50%"} height={"100%"} padding={"1%"}>
          <Image width={"100%"} borderRadius={"10px"} src={Image1} />
          <Image
            marginTop={"5%"}
            width={"100%"}
            borderRadius={"10px"}
            src={Image2}
          />
        </Box>
        <Image
          width={"50%"}
          padding={"1%"}
          borderRadius={"15px"}
          src={Image3}
        />
      </Box>
      <Box height={"100%"} width={"50%"} paddingLeft={"5%"} paddingY={"3%"}>
        <Box width={"60%"}>
          <Heading fontSize={"25px"} color={"brand.500"} marginBottom={"3%"}>
            ABOUT US
          </Heading>
          <Text
            fontSize={"33px"}
            fontWeight={"bold"}
            marginBottom={"3%"}
            maxHeight={"100px"}
          >
            Over 11 Years of Experience in Serving People
          </Text>
          <Box
            height={"5px"}
            width={"100px"}
            borderRadius={"30px"}
            bgColor={"brand.500"}
            marginBottom={"5%"}
          ></Box>
          <Text fontSize={"20px"} color={"gray.600"} maxHeight={"100px"}>
            We are a certified security company, We have consistently satisfied
            our customers with our amazing security services.
          </Text>
        </Box>
        <Box
          bgColor={""}
          width="60%"
          height={"20%"}
          borderRadius={"10px"}
          marginTop={"3%"}
          display={"flex"}
          maxHeight={"100px"}
        >
          <Box width={"15%"} height={"100%"} display={"flex"} padding={"1%"}>
            <FaCheckCircle size={"full"} color="#009688" />
          </Box>
          <Box padding={"2%"}>
            <Heading fontSize={"25px"}>Our Mission</Heading>
            <Text fontSize={"20px"} color={"gray.600"}>
              Our mission is to provide the best security services to our
              customers.
            </Text>
          </Box>
        </Box>
        <Box
          bgColor={""}
          width="60%"
          height={"20%"}
          borderRadius={"10px"}
          marginTop={"3%"}
          display={"flex"}
          maxHeight={"100px"}
        >
          <Box width={"15%"} height={"100%"} display={"flex"} padding={"1%"}>
            <FaCheckCircle size={"full"} color="#009688" />
          </Box>
          <Box padding={"2%"}>
            <Heading fontSize={"25px"}>Our Vision</Heading>
            <Text fontSize={"20px"} color={"gray.600"}>
              Our vision is to improve and expand our services to the whole
              world.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Panel1;
