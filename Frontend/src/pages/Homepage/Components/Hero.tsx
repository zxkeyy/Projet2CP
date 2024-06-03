import { Heading, Button, Box, Text } from "@chakra-ui/react";
import { BsSafe } from "react-icons/bs";
import { GiCctvCamera, GiSteelDoor, GiSiren } from "react-icons/gi";
import { ImKey2 } from "react-icons/im";
import { IoKeypadOutline } from "react-icons/io5";
import HeroImage from "../../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <Box
        bgImage={HeroImage}
        bgSize={"100%"}
        width={"100%"}
        aspectRatio={1920 / 600}
        display={"flex"}
        justifyContent={"end"}
      >
        <Box
          bgColor={""}
          width={"50%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection="column"
        >
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "10px", md: "17px", lg: "20px" }}
          >
            BAHA-TECHNOLOGIE
          </Text>
          <Heading
            textAlign={"center"}
            color={"white"}
            fontSize={{ base: "15px", md: "25px", lg: "35px" }}
          >
            Your Security
            <br />
            Is
            <br />
            Our Priority
          </Heading>
          <Button
            marginTop={"3%"}
            colorScheme="teal"
            size={{ base: "xs", md: "md", lg: "lg" }}
            fontSize={{ base: "7px", md: "14px", lg: "20px" }}
            padding={"4%"}
          >
            Discover More
          </Button>
        </Box>
      </Box>
      <Box width={"100%"} display={"flex"} bgColor={"#292734"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          aspectRatio={320 / 150}
          width={"20%"}
          borderRight={"1px"}
          borderColor={"bg.500"}
        >
          <Box width={"20%"} marginRight={"5%"}>
            <GiCctvCamera size="100%" color="#009688" />
          </Box>
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
            Video Surveillance
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          aspectRatio={320 / 150}
          width={"20%"}
          borderRight={"1px"}
          borderColor={"bg.500"}
        >
          <Box width={"20%"} marginRight={"5%"}>
            <ImKey2 size="100%" color="#009688" />
          </Box>
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
            LockSmith Services
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          aspectRatio={320 / 150}
          width={"20%"}
          borderRight={"1px"}
          borderColor={"bg.500"}
        >
          <Box width={"20%"} marginRight={"5%"}>
            <IoKeypadOutline size="100%" color="#009688" />
          </Box>
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
            Access Control
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          aspectRatio={320 / 150}
          width={"20%"}
          borderRight={"1px"}
          borderColor={"bg.500"}
        >
          <Box width={"20%"} marginRight={"5%"}>
            <BsSafe size="100%" color="#009688" />
          </Box>
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
            Safes & Locks
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          aspectRatio={320 / 150}
          width={"20%"}
          borderRight={"1px"}
          borderColor={"bg.500"}
        >
          <Box width={"20%"} marginRight={"5%"}>
            <GiSteelDoor size="100%" color="#009688" />
          </Box>
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
            Security Doors
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          aspectRatio={320 / 150}
          width={"20%"}
        >
          <Box width={"20%"} marginRight={"5%"}>
            <GiSiren size="100%" color="#009688" />
          </Box>
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
            Alarm Systems
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
