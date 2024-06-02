import {
  Flex,
  NumberInput,
  NumberInputField,
  Text,
  Image,
} from "@chakra-ui/react";
import useProduct from "../../../Hooks/useProduct";

interface Props {
  id: string;
  quantity: number;
}

const OrderProduct = ({ id, quantity }: Props) => {
  const { data } = useProduct(id ?? "");
  const product = data?.Product;
  if (!product) {
    return <div>Error: product has been deleted or doesn't exist {id}</div>;
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
          width="15%"
        >
          <NumberInputField />
        </NumberInput>
        <Text width="15%">${product.price * quantity}</Text>
      </Flex>
    </Flex>
  );
};

export default OrderProduct;
