import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

interface Props {
  product: Product;
}

const ProductDashboardCard = ({ product }: Props) => {
  const onDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/products/${product._id}`,
        { withCredentials: true }
      );
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LinkBox>
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
          <LinkOverlay href={`/dashboard/products/edit-product/${product._id}`}>
            <Heading marginTop={"5px"} fontSize={"17px"}>
              Summary
            </Heading>
          </LinkOverlay>
          <Text fontSize={"12px"}>{product?.description?.slice(0, 80)}...</Text>
          <Divider marginTop={"10px"} />
          <Flex justifyContent={"space-between"} marginTop={"10px"}>
            <Text fontSize={"12px"}>
              <b>Stock Left:</b> {product.qty ?? 0}
            </Text>
            <Button colorScheme="red" size={"xs"} onClick={() => onDelete()}>
              delete
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default ProductDashboardCard;
