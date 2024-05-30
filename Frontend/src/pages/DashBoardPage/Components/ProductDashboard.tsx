import {
  InputGroup,
  InputLeftElement,
  Button,
  Input,
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useProducts from "../../../Hooks/useProducts";
import { FaPlusCircle } from "react-icons/fa";
import ProductDashboardCard from "./ProductDashboardCard";
import { Link } from "react-router-dom";

const ProductDashboard = () => {
  const [search, setSearch] = useState("");
  const { data, status, error } = useProducts({
    search: search,
  });

  const products = data?.Products;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      //alignItems={"center"}
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
            bgColor={"white"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Box>
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={"30px"} textColor={"#009688"}>
          All Products
        </Heading>
        <Link to="/dashboard/products/add-product">
          <Button colorScheme="teal">
            <FaPlusCircle />
            <Text marginLeft={"10px"}>Add New Product</Text>
          </Button>
        </Link>
      </Flex>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={"40px"}
        minWidth={"50%"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={10}>
            {status == "loading" && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {products?.length === 0 && <div>No products found</div>}
            {products?.map((product) => (
              <ProductDashboardCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDashboard;
