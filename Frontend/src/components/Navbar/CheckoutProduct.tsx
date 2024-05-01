import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import CartService from "../../services/CartService";

interface Props {
  id: string;
}

const CheckoutProduct = ({ id }: Props) => {
  const [cart] = useState(CartService.getCart());
  const [quantity] = useState(cart[id].quantity ?? 1);

  const { data } = useProduct(id ?? "");
  const product = data?.Product;

  return (
    <Box
      display="flex"
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image marginRight={"30px"} src={product?.thumbnail} boxSize={"50px"} />
        <Text>{quantity + " " + product?.name}</Text>
      </Box>

      <Text>${product?.price ? product?.price*quantity : 0}</Text>
    </Box>
  );
};

export default CheckoutProduct;
