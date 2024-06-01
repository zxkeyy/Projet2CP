import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import useOrders from "../../../Hooks/UseOrders";

const OrderDashboard = () => {
  const { data } = useOrders();
  const orders = data;

  console.log(orders);

  return (
    <Flex width={"100%"}>
      <Flex flexDirection={"column"} width={"100%"} padding={"1rem"}>
        <Heading textColor={"brand.500"}>Orders</Heading>
        <Flex
          flexDirection={"column"}
          bgColor={"#F8F8F8"}
          borderRadius={"20px"}
          //border={"1px solid gray"}
          padding={"1rem"}
          gap={"1rem"}
          maxHeight={window.innerHeight}
          overflow={"scroll"}
        >
          <Heading fontSize={"20px"}>All Orders</Heading>
          <Divider />
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            textColor={"#6F6F6E"}
          >
            <Heading fontSize={"18px"} width={"20%"}>
              id
            </Heading>
            <Heading fontSize={"18px"} width={"20%"}>
              N* Products
            </Heading>
            <Heading fontSize={"18px"} width={"20%"}>
              Total Price
            </Heading>
            <Heading fontSize={"18px"} width={"20%"}>
              Date
            </Heading>
            <Heading fontSize={"18px"} width={"20%"}>
              Customer Name
            </Heading>
          </Flex>

          <Divider />
          {orders?.map((order: any) => (
            <>
              <Flex
                key={order._id}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Text width={"20%"} fontWeight={"bold"}>
                  {order._id}
                </Text>
                <Text width={"20%"} fontWeight={"bold"}>
                  {order.products.length}
                </Text>
                <Text width={"20%"} fontWeight={"bold"}>
                  ${order.total_price}
                </Text>
                <Text width={"20%"} fontWeight={"bold"}>
                  {new Date(order?.createdAt)
                    .toString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </Text>
                <Text width={"20%"} fontWeight={"bold"}>
                  {order.user_id}
                </Text>
              </Flex>
              <Divider key={order.createdAt} />
            </>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderDashboard;
