import { useParams } from "react-router-dom";
import useOrders from "../../../Hooks/UseOrders";
import useUser from "../../../Hooks/useUser";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import OrderProduct from "./OrderProduct";

const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useOrders();
  const orders = data;

  const order = orders?.find((order: any) => order._id === id);
  const { data: userData } = useUser(order?.user_id);

  console.log(order);
  console.log(userData);

  return (
    <Flex width={"100%"} padding={"1rem"} justifyContent={"space-evenly"}>
      <Flex width={"60%"}>
        <Flex
          flexDirection={"column"}
          bgColor={"white"}
          borderRadius={"20px"}
          padding={"1rem"}
          width={"100%"}
          gap={"1rem"}
        >
          <Heading fontSize={"20px"}>Products</Heading>
          <Divider />
          <Flex
            justifyContent="space-between"
            borderRadius="4px"
            alignItems="center"
            bgColor="#FFFFFF"
            p="15px"
            boxShadow="base"
            width={"100%"}
          >
            <Text width={"40%"}>Product</Text>
            <Flex justifyContent="space-between" width={"60%"}>
              <Text width="25%">Price</Text>
              <Text width="15%">Quantity</Text>
              <Text width="15%">Subtotal</Text>
            </Flex>
          </Flex>
          {order &&
            order?.products.map((product: any) => (
              <OrderProduct
                key={product.productId}
                id={product.productId}
                quantity={product.quantity}
              />
            ))}
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} width={"30%"} gap={"1rem"}>
        <Flex
          flexDirection={"column"}
          bgColor={"white"}
          borderRadius={"20px"}
          padding={"1rem"}
          width={"100%"}
          gap={"1rem"}
        >
          <Heading fontSize={"20px"}>Payment</Heading>
          <Divider />
          <Flex
            flexDirection={"column"}
            padding={"1rem"}
            width={"100%"}
            bgColor={"gray.50"}
            borderRadius={"10px"}
            gap={"5px"}
          >
            <Flex justifyContent={"space-between"}>
              <Text>SubTotal Price:</Text>
              <Text fontWeight={"bold"}>${order?.total_price}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Shippment:</Text>
              <Text fontWeight={"bold"}>$0</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Discount:</Text>
              <Text fontWeight={"bold"}>-$0</Text>
            </Flex>
            <Divider borderColor={"gray.500"} />
            <Flex justifyContent={"space-between"}>
              <Text>Total Price:</Text>
              <Text fontWeight={"bold"}>${order?.total_price}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Payment status:</Text>
              <Text fontWeight={"bold"}>{order?.payment_status}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          bgColor={"white"}
          borderRadius={"20px"}
          padding={"1rem"}
          width={"100%"}
          gap={"1rem"}
        >
          <Heading fontSize={"20px"}>Customer</Heading>
          <Divider />
          <Flex
            flexDirection={"column"}
            padding={"1rem"}
            width={"100%"}
            bgColor={"gray.50"}
            borderRadius={"10px"}
            gap={"5px"}
          >
            <Text fontWeight={"bold"}>General Information :</Text>
            <Divider borderColor={"gray.500"} />
            <Flex justifyContent={"space-between"}>
              <Text>Username:</Text>
              <Text fontWeight={"bold"}>{userData?.username}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Email:</Text>
              <Text fontWeight={"bold"}>{userData?.email}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Phone:</Text>
              <Text fontWeight={"bold"}>{order?.phoneNumber}</Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            padding={"1rem"}
            width={"100%"}
            bgColor={"gray.50"}
            borderRadius={"10px"}
            gap={"5px"}
          >
            <Text fontWeight={"bold"}>Shipping Address:</Text>
            <Divider borderColor={"gray.500"} />
            <Flex justifyContent={"space-between"}>
              <Text>Wilaya:</Text>
              <Text fontWeight={"bold"}>
                {order?.wilaya ?? "no wilaya available"}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Address:</Text>
              <Text fontWeight={"bold"}>
                {order?.address ?? "no address available"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          bgColor={"white"}
          borderRadius={"20px"}
          padding={"1rem"}
          width={"100%"}
          gap={"1rem"}
        >
          <Heading fontSize={"20px"}>Order Information :</Heading>
          <Divider />
          <Flex
            flexDirection={"column"}
            padding={"1rem"}
            width={"100%"}
            bgColor={"gray.50"}
            borderRadius={"10px"}
            gap={"5px"}
          >
            <Flex justifyContent={"space-between"}>
              <Text>Order ID:</Text>
              <Text fontWeight={"bold"}>{order?._id}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Created At:</Text>
              <Text fontWeight={"bold"}>{order?.createdAt}</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Last Updated:</Text>
              <Text fontWeight={"bold"}>{order?.updatedAt}</Text>
            </Flex>
            <Divider borderColor={"gray.500"} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderDetailsPage;
