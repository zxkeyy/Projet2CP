import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const ProductDashboardCard = ({ product }: Props) => {
  return (
    <Card bgColor={"#FAFAFA"}>
      <CardBody width={"300px"}>
        <Flex gap={"10px"}>
          <Image src={product.thumbnail} boxSize={"80px"} />
          <Flex flexDirection={"column"} justifyContent={"space-around"}>
            <Heading fontSize={"17px"}>{product.name}</Heading>
            <Text fontSize={"12px"}>{product.category}</Text>
            <Text fontSize={"17px"}>${product.price}</Text>
          </Flex>
        </Flex>
        <Heading marginTop={"5px"} fontSize={"17px"}>
          Summary
        </Heading>
        <Text fontSize={"12px"}>{product?.description?.slice(0, 80)}...</Text>
      </CardBody>
    </Card>
  );
};

export default ProductDashboardCard;
