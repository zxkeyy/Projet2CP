import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import ProductCard from "../../components/ProductCard";
import ProductFilters from "./ProductFilters";

const product = {
  name: "Security Camera System",
  price: 199.99,
  category: "Security",
  gallery: ["https://placehold.it/640x480", "https://placehold.it/640x480"],
  thumbnail: "https://placehold.it/640x480",
  description: "This is a security camera system",
};

const StorePage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgColor={"white"}
      gap={"20px"}
      padding={"20px"}
    >
      <Box width={"70%"}>
        <InputGroup>
          <InputLeftElement>
            <Button variant="unstyled" paddingLeft={4} type="submit">
              <BsSearch />
            </Button>
          </InputLeftElement>
          <Input placeholder="search" variant="outline" borderColor={"gray.100"} />
        </InputGroup>
      </Box>
      <Box display={"flex"} gap={"40px"}>
        <ProductFilters />
        <Box>
          <SimpleGrid columns={4} spacing={10}>
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default StorePage;
