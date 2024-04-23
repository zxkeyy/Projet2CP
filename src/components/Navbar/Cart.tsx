import { Box, BoxProps } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props extends BoxProps {}

const Cart = (props: Props) => {
  return (
    <Box position={"relative"} {...props}>
      <Box
        style={{
          fontSize: window.innerWidth / 150,
          fontWeight: "bold",
          color: "white",
        }}
        bgColor={"black"}
        borderRadius={"30%"}
        height={"40%"}
        width={"60%"}
        position={"absolute"}
        top={0}
        right={0}
        textAlign={"center"}
        paddingTop={"2%"}
      >
        0
      </Box>
      <AiOutlineShoppingCart size={"full"} color="#009688" />
    </Box>
  );
};

export default Cart;
