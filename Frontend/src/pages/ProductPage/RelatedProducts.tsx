import { Box, Heading } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";
import useProducts from "../../Hooks/useProducts";

interface Props {
  product: Product;
}

const RelatedProducts = ({ product }: Props) => {
  const { data, status, error } = useProducts({
    category: product.category,
    limit: 4,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box display={"flex"} justifyContent={"center"} paddingY={"40px"}>
      <Box width={"60%"}>
        <Heading fontSize={"20px"} marginBottom={"30px"} color={"brand.500"}>
          Related Products
        </Heading>
        <Box display={"flex"} justifyContent={"center"} gap={"100px"}>
          {data?.Products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
