import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Image,
} from "@chakra-ui/react";
import useProduct from "../../Hooks/useProduct";
import { useState } from "react";
import CartService from "../../services/CartService";

interface Props {
  id: string;
}

const CartProduct = ({ id }: Props) => {
  const [cart] = useState(CartService.getCart());
  const [quantity, setQuantity] = useState(cart[id].quantity ?? 1);
  const handleQuantityChange = (valueString: string) => {
    const value = parseInt(valueString);
    if (isNaN(value)) {
      setQuantity(1);
    } else {
      CartService.addToCart({ id, quantity: value });
      setQuantity(value);
    }
  };

  const { data } = useProduct(id ?? "");
  const product = data?.Product;
  if (!product) {
    return <div>Error: couldn't find product</div>;
  }
  return (
    <Flex
      justifyContent="space-between"
      boxShadow="base"
      borderRadius="4px"
      alignItems="center"
      bgColor="#FFFFFF"
      p="15px"
    >
      <Flex alignItems="center" gap={"5px"} width="40%">
        <Image boxSize={"30px"} src={product.thumbnail}></Image>
        <Text>{product.name}</Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" width={"60%"}>
        <Text width="25%">${product.price}</Text>
        <NumberInput
          focusBorderColor="blue.300"
          defaultValue={1}
          min={1}
          max={20}
          w="75px"
          value={quantity}
          onChange={handleQuantityChange}
          width="15%"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text width="15%">${product.price * quantity}</Text>
      </Flex>
    </Flex>
  );
};

export default CartProduct;
