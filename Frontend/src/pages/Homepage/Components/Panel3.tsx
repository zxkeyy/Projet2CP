import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/CardImage1.png";
import Image2 from "../../../assets/CardImage2.png";
import Image3 from "../../../assets/CardImage3.png";

const Panel3 = () => {
  return (
    <Box
      aspectRatio={1920 / 820}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
        <Box
          width={"40px"}
          border={"2px"}
          borderColor={"brand.500"}
          borderRadius={"5px"}
          marginBottom={"1%"}
        ></Box>
        <Heading fontSize={window.innerWidth / 70} marginBottom={"3%"}>
          Our services
        </Heading>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          paddingX={"10%"}
        >
          <Card
            style={{ borderBlockColor: "#009688" }}
            bgColor={"bg.500"}
            borderBottom={"4px"}
            borderStyle={"solid"}
            borderRadius={"10px"}
            marginRight={"5%"}
          >
            <CardBody>
              <Image src={Image1} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Heading
                  fontSize={window.innerWidth / 80}
                  marginTop={"15%"}
                  textAlign={"center"}
                >
                  Finger Print Access
                </Heading>
                <Box
                  border={"2px"}
                  color={"brand.500"}
                  width={"10%"}
                  marginTop={"5%"}
                  borderRadius={"5px"}
                ></Box>
                <Text
                  textAlign={"center"}
                  width={"220px"}
                  color={"gray"}
                  fontSize={window.innerWidth / 140}
                  marginTop={"5%"}
                >
                  We offer a Biometric Access control System and installation
                  service for
                </Text>
              </Box>
            </CardBody>
            <CardFooter display={"flex"} justifyContent={"center"}>
              <Link to="/services">
                <Text
                  fontSize={window.innerWidth / 120}
                  fontWeight={"bold"}
                  textDecorationLine={"underline"}
                  textDecorationColor={"brand.500"}
                  textDecorationThickness={"2px"}
                  textUnderlineOffset={"50%"}
                >
                  Read More
                </Text>
              </Link>
            </CardFooter>
          </Card>
          <Card
            style={{ borderBlockColor: "#009688" }}
            bgColor={"bg.500"}
            borderBottom={"4px"}
            borderStyle={"solid"}
            borderRadius={"10px"}
            marginRight={"5%"}
          >
            <CardBody>
              <Image src={Image2} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Heading
                  fontSize={window.innerWidth / 80}
                  marginTop={"15%"}
                  textAlign={"center"}
                >
                  Closed Circuit Cameras
                </Heading>
                <Box
                  border={"2px"}
                  color={"brand.500"}
                  width={"10%"}
                  marginTop={"5%"}
                  borderRadius={"5px"}
                ></Box>
                <Text
                  textAlign={"center"}
                  width={"220px"}
                  color={"gray"}
                  fontSize={window.innerWidth / 140}
                  marginTop={"5%"}
                >
                  We have expertise in CCTV systems installations. We are using
                  products
                </Text>
              </Box>
            </CardBody>
            <CardFooter display={"flex"} justifyContent={"center"}>
              <Link to="/services">
                <Text
                  fontSize={window.innerWidth / 120}
                  fontWeight={"bold"}
                  textDecorationLine={"underline"}
                  textDecorationColor={"brand.500"}
                  textDecorationThickness={"2px"}
                  textUnderlineOffset={"50%"}
                >
                  Read More
                </Text>
              </Link>
            </CardFooter>
          </Card>

          <Card
            style={{ borderBlockColor: "#009688" }}
            bgColor={"bg.500"}
            borderBottom={"4px"}
            borderStyle={"solid"}
            borderRadius={"10px"}
          >
            <CardBody>
              <Image src={Image3} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Heading
                  fontSize={window.innerWidth / 80}
                  marginTop={"15%"}
                  textAlign={"center"}
                >
                  CCTV Installation
                </Heading>
                <Box
                  border={"2px"}
                  color={"brand.500"}
                  width={"10%"}
                  marginTop={"5%"}
                  borderRadius={"5px"}
                ></Box>
                <Text
                  textAlign={"center"}
                  width={"220px"}
                  color={"gray"}
                  fontSize={window.innerWidth / 140}
                  marginTop={"5%"}
                >
                  We offer free CCTV installation services to home and office.
                </Text>
              </Box>
            </CardBody>
            <CardFooter display={"flex"} justifyContent={"center"}>
              <Link to="/services">
                <Text
                  fontSize={window.innerWidth / 120}
                  fontWeight={"bold"}
                  textDecorationLine={"underline"}
                  textDecorationColor={"brand.500"}
                  textDecorationThickness={"2px"}
                  textUnderlineOffset={"50%"}
                >
                  Read More
                </Text>
              </Link>
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Panel3;
