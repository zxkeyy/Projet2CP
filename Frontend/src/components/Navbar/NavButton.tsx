import { Box, Button, ButtonProps, Image } from "@chakra-ui/react";
import DomeCamera from "../../assets/DomeCamera.png";

interface Props extends ButtonProps {}

const NavButton = (props: Props) => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"full"}
    >
      {props["aria-selected"] ? <Image src={DomeCamera} position={"absolute"} top={"-2"}></Image> : null}
      <Button
        _hover={{ color: "brand.500", cursor: "pointer" }}
        _active={{ color: "brand.500" }}
        _selected={{ color: "brand.500" }}
        bg=""
        borderRadius="0"
        cursor="default"
        textAlign="center"
        fontWeight={"bold"}
        fontSize={{base: "10px", xl:"18px"}}
        {...props}
      ></Button>
    </Box>
  );
};

export default NavButton;
