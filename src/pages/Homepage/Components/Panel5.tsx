import { List, ListItem, ListIcon, Box, Text, Image } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import Image1 from "../../../assets/Panel5Image1.png";
import Image2 from "../../../assets/Panel5Image2.png";
import Image3 from "../../../assets/Panel5Image3.png";

const Panel5 = () => {
  return (
    <Box aspectRatio={5 / 2} width={"100%"} display={"flex"}>
      <Box
        width={"50%"}
        height={"100%"}
        display={"flex"}
        paddingLeft={"8%"}
        paddingY={"1%"}
      >
        <Box width={"40%"} height={"100%"} padding={"1%"}>
          <Image aspectRatio={1 / 1} width={"100%"} src={Image1} />
          <Image
            aspectRatio={1 / 1}
            marginTop={"8%"}
            width={"100%"}
            src={Image2}
          />
        </Box>
        <Image
          aspectRatio={500 / 620}
          height={"85%"}
          padding={"1%"}
          src={Image3}
        />
      </Box>
      <Box height={"100%"} width={"50%"} paddingLeft={"5%"} paddingY={"3%"}>
        <Box width={"60%"}>
          <Box
            height={"3px"}
            width={"100px"}
            borderRadius={"30px"}
            bgColor={"brand.500"}
            marginBottom={"5%"}
          ></Box>
          <Text fontSize={"25px"} fontWeight={"bold"} marginBottom={"3%"}>
            Locksmithing services
          </Text>
          <Text fontSize={"35px"} maxHeight={"200px"}>
            Our technicians are equipped with the
            <b> latest modern technology </b>
            and are available 24/7 at your request.
          </Text>
        </Box>
        <Box
          bgColor={""}
          width="60%"
          height={"20%"}
          borderRadius={"10px"}
          marginTop={"3%"}
          display={"flex"}
        >
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
        </Box>
      </Box>
    </Box>
  );
};

export default Panel5;
