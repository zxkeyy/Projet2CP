import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useModal } from "../../components/Navbar/ModalContext";
import OrderDetails from "./OrderDetails";

export interface Product {
  productId: string;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  user_id: string;
  products: Product[];
  total_price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Myorderspage = () => {
  const { onOpen } = useModal();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const GetOrders = async () => {
      try {
        const response = await axios.get<Order[]>(
          "http://localhost:5000/orders/getAllUserOrder",
          { withCredentials: true }
        );
        setOrders(response.data);
        console.log("order : " + orders);
        console.log("resdata:" + response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    GetOrders();
  }, []);

  return (
    <>
      <Heading color="#009688">My Orders</Heading>
      <Flex
        my="30px"
        flexDir="column"
        bg="#F8F8F8"
        p="5px 20px"
        boxShadow="0px 1px 13px 0px #0000000D"
      >
        <Flex
          justifyContent="space-between"
          color="#232321CC"
          alignItems="center"
          h="50px"
          borderBottom="1px solid #E2E8F0"
        >
          <Text w="100px" fontSize="lg" fontWeight="500">
            Date
          </Text>
          <Text w="100px" fontSize="lg" fontWeight="500">
            Total Price
          </Text>
          <Text w="70px" fontSize="lg" fontWeight="500">
            Status
          </Text>
          <Box w="100px"></Box>
        </Flex>
        {isLoading ? (
          // Display loading skeletons while data is being fetched
          <>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              h="55px"
              px="5px"
              borderBottom="1px solid #E2E8F0"
              key="loading"
            >
              <SkeletonText w="100px" />
              <SkeletonText w="56px" mr="85px" />
              <HStack>
                <Skeleton h="12px" w="12px" borderRadius="50%" />
                <SkeletonText />
              </HStack>
              <Button bg="#ddd" size="sm" color="black" isDisabled>
                Loading...
              </Button>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              h="55px"
              px="5px"
              borderBottom="1px solid #E2E8F0"
              key="loading2"
            >
              <SkeletonText w="100px" />
              <SkeletonText w="56px" mr="85px" />
              <HStack>
                <Skeleton h="12px" w="12px" borderRadius="50%" />
                <SkeletonText />
              </HStack>
              <Button bg="#ddd" size="sm" color="black" isDisabled>
                Loading...
              </Button>
            </Flex>
          </>
        ) : (
          orders?.map((order) => (
            <Flex
              cursor="pointer"
              _hover={{ boxShadow: "lg", bg: "gray.200" }}
              key={order._id}
              alignItems="center"
              justifyContent="space-between"
              fontWeight="bold"
              h="55px"
              px="5px"
              borderBottom="1px solid #E2E8F0"
            >
              <Text> {new Date(order.createdAt).toLocaleDateString()} </Text>
              <Text w="56px" mr="25px">
                ${order.total_price}
              </Text>
              <HStack>
                <Box
                  h="12px"
                  w="12px"
                  bg="#003F62"
                  borderRadius="50%"
                  mt="1px"
                ></Box>
                <Text>Delivred</Text>
              </HStack>
              <Button
                bg="#009688"
                onClick={() => onOpen({ order })}
                size="sm"
                color="white"
                _hover={{ color: "black", bg: "white" }}
              >
                Details
              </Button>
              <OrderDetails />
            </Flex>
          ))
        )}
      </Flex>
    </>
  );
};
export default Myorderspage;
