<<<<<<< HEAD
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Text,
  Image,
  Show,
} from "@chakra-ui/react";
=======
import { List, ListItem, ListIcon, Box, Text, Image } from "@chakra-ui/react";
>>>>>>> 6616365 (adding google sign in front and back)
import { FaCircle } from "react-icons/fa";
import Image3 from "../../../assets/Panel5Image3.png";

const Panel2 = () => {
  return (
    <Box aspectRatio={7 / 2} width={"100%"} display={"flex"}>
      <Box
        width={"45%"}
        height={"100%"}
        display={"flex"}
        paddingY={"1%"}
        justifyContent={"end"}
      >
        <Image
          aspectRatio={500 / 620}
          height={"100%"}
          padding={"1%"}
          src={Image3}
        />
      </Box>
<<<<<<< HEAD
      <Box height={"100%"} width={"50%"} paddingLeft={"5%"} paddingTop={"3%"}>
=======
      <Box
        height={"100%"}
        width={"50%"}
        paddingLeft={"5%"}
        paddingTop={"3%"}
      >
>>>>>>> 6616365 (adding google sign in front and back)
        <Box width={"60%"}>
          <Box
            height={"3px"}
            width={"100px"}
            borderRadius={"30px"}
            bgColor={"brand.500"}
            marginBottom={"5%"}
          ></Box>
<<<<<<< HEAD
          <Text
            fontSize={{ base: "10px", md: "18px", lg: "25px" }}
            fontWeight={"bold"}
            marginBottom={"3%"}
          >
            Locksmithing services
          </Text>
          <Text
            fontSize={{ base: "10px", md: "18px", lg: "30px" }}
            maxHeight={"200px"}
          >
=======
          <Text fontSize={"25px"} fontWeight={"bold"} marginBottom={"3%"}>
            Locksmithing services
          </Text>
          <Text fontSize={"35px"} maxHeight={"200px"}>
>>>>>>> 6616365 (adding google sign in front and back)
            Our technicians are equipped with the
            <b> latest modern technology </b>
            and are available 24/7 at your request.
          </Text>
        </Box>
        <Box
          width="60%"
          height={"20%"}
          borderRadius={"10px"}
          marginTop={"3%"}
          display={"flex"}
        >
<<<<<<< HEAD
          <Show above="2xl">
            <Box
              marginRight={"20%"}
              fontSize={{ base: "4px", md: "7px", lg: "12px" }}
            >
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Master key systems
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  High security cylinders
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Changing and rekeying locks
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Keyless entry systems
                </ListItem>
              </List>
            </Box>
            <Box fontSize={{ base: "4px", md: "7px", lg: "12px" }}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Fast lockout services
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Installation and repair of locks
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Window and door locks
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                  Deadlocks and Padlocks
                </ListItem>
              </List>
            </Box>
          </Show>
=======
          <Box marginRight={"20%"} fontSize={"12px"}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Master key systems
              </ListItem>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                High security cylinders
              </ListItem>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Changing and rekeying locks
              </ListItem>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Keyless entry systems
              </ListItem>
            </List>
          </Box>
          <Box fontSize={"12px"}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Fast lockout services
              </ListItem>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Installation and repair of locks
              </ListItem>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Window and door locks
              </ListItem>
              <ListItem>
                <ListIcon as={FaCircle} width={"5px"} color="brand.500" />
                Deadlocks and Padlocks
              </ListItem>
            </List>
          </Box>
>>>>>>> 6616365 (adding google sign in front and back)
        </Box>
      </Box>
    </Box>
  );
};

export default Panel2;
