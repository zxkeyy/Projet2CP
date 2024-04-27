import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
    Image1: string,
    name: string,
    price: number,
}

const CheckoutProduct = ({Image1, name, price} : Props) => {
  return (
    <Box
      display="flex"
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image marginRight={"30px"} src={Image1} boxSize={"50px"} />
        <Text>{name}</Text>
      </Box>

      <Text>${price}</Text>
    </Box>
  );
};

export default CheckoutProduct;
