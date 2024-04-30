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
import { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";

const StorePage = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useProducts({name: search});

  const products = data?.Products;


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
          <Input
            placeholder="search"
            variant="outline"
            borderColor={"gray.100"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Box>
      <Box display={"flex"} gap={"40px"}>
        <ProductFilters />
        <Box>
          <SimpleGrid columns={4} spacing={10}>
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default StorePage;
