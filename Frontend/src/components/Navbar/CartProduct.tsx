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

interface Props {
  product: Product;
}

const CartProduct = ({ product }: Props) => {
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
          value={2}
          width="15%"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text width="15%">${product.price * 2}</Text>
      </Flex>
    </Flex>
  );
};

export default CartProduct;
