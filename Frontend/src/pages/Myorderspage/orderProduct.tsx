import { Flex, Image, Text } from "@chakra-ui/react";
import useProduct from "../../Hooks/useProduct";

interface OrderProductProps {
  product: {
    productId: string;
    quantity: number;
  };
}

const OrderProduct: React.FC<OrderProductProps> = ({ product }) => {
  const { productId, quantity } = product;
  const { data, isLoading, error } = useProduct(productId);
  const Product = data?.Product;

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error || !Product) {
    return <Text>Error: couldn't find product</Text>;
  }

  return (
    <Flex
      justifyContent="space-between"
      borderRadius="4px"
      alignItems="center"
      bgColor="#FFFFFF"
      p="15px"
      boxShadow="base"
      my="10px"
    >
      <Image boxSize="35px" src={Product?.thumbnail} alt={Product?.name} />
      <Text width="40%">{Product.name}</Text>
      <Flex justifyContent="space-between" alignItems="center" width="60%">
        <Text width="25%">${Product.price}</Text>
        <Text width="15%">{quantity}</Text>
        <Text width="15%">${Product.price * quantity}</Text>
      </Flex>
    </Flex>
  );
};

export default OrderProduct;
