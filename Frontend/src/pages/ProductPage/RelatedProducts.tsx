import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

interface Props {
  product: Product;
}

const RelatedProducts = ({ product }: Props) => {
  const [data, setData] = useState<{ Products: Product[] }>({ Products: [] });
  useEffect(() => {
    fetch(
      "http://localhost:5000/api/products/?category=" +
        product.category +
        "&limit=4"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"} paddingY={"40px"}>
      <Box width={"60%"}>
        <Heading fontSize={"20px"} marginBottom={"30px"} color={"brand.500"}>Related Products</Heading>
        <Box display={"flex"} justifyContent={"center"} gap={"100px"}>
          {data.Products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
