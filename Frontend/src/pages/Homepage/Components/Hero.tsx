<<<<<<< HEAD
import { Heading, Button, Box, Text } from "@chakra-ui/react";
import { BsSafe } from "react-icons/bs";
import { GiCctvCamera, GiSteelDoor, GiSiren } from "react-icons/gi";
import { ImKey2 } from "react-icons/im";
import { IoKeypadOutline } from "react-icons/io5";
import HeroImage from "../../../assets/hero.png";
=======
import { Heading, Button, Box, Text } from "@chakra-ui/react"
import { BsSafe } from "react-icons/bs"
import { GiCctvCamera, GiSteelDoor, GiSiren } from "react-icons/gi"
import { ImKey2 } from "react-icons/im"
import { IoKeypadOutline } from "react-icons/io5"
import HeroImage from "../../../assets/hero.png"

>>>>>>> 6616365 (adding google sign in front and back)

const Hero = () => {
  return (
    <>
<<<<<<< HEAD
      <Box
=======
    <Box
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "10px", md: "17px", lg: "20px" }}
          >
=======
          <Text fontWeight={"bold"} fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
            BAHA-TECHNOLOGIE
          </Text>
          <Heading
            textAlign={"center"}
            color={"white"}
<<<<<<< HEAD
            fontSize={{ base: "15px", md: "25px", lg: "35px" }}
=======
            fontSize={window.innerWidth / 25}
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
            size={{ base: "xs", md: "md", lg: "lg" }}
            fontSize={{ base: "7px", md: "14px", lg: "20px" }}
=======
            fontSize={window.innerWidth / 70}
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
=======
          <Text color="white" fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
=======
          <Text color="white" fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
=======
          <Text color="white" fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
=======
          <Text color="white" fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
=======
          <Text color="white" fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
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
<<<<<<< HEAD
          <Text color="white" fontSize={{ base: "6px", md: "12px", lg: "20px" }}>
=======
          <Text color="white" fontSize={window.innerWidth / 80}>
>>>>>>> 6616365 (adding google sign in front and back)
            Alarm Systems
          </Text>
        </Box>
      </Box>
<<<<<<< HEAD
    </>
  );
};

export default Hero;
=======
      </>
  )
}

export default Hero
>>>>>>> 6616365 (adding google sign in front and back)
