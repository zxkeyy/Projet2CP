import {
  Card,
  CardBody,
  Heading,
  Button,
  Text,
  Box,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import fallback from "../assets/fallback.png";
import CartService from "../services/CartService";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <LinkBox>
      <Card
        width={"200px"}
        bgColor={"transparent"}
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image
          src={product.thumbnail}
          fallbackSrc={fallback}
          width={"200px"}
          height={"200px"}
          objectFit={"cover"}
        />
        <CardBody
          padding={"10px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          border={"0px"}
        >
          <LinkOverlay href={`/store/product/${product._id}`}>
            <Heading fontSize={"12px"}>{product.name}</Heading>
          </LinkOverlay>
          <Text fontSize={"13px"} fontWeight={""} color={"brand.500"}>
            ${product.price}
          </Text>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Button
              fontSize={"11px"}
              width={"100%"}
              padding={0}
              height={"30px"}
              variant={"outline"}
              border={"1px solid"}
            >
              Learn more
            </Button>
            <Button
              fontSize={"11px"}
              width={"100%"}
              colorScheme="teal"
              padding={0}
              height={"30px"}
              onClick={() =>
                CartService.addToCart({ id: product._id, quantity: 1 })
              }
            >
              <AiOutlineShoppingCart size={"15px"} />
              Add to Cart
            </Button>
          </Box>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default ProductCard;
