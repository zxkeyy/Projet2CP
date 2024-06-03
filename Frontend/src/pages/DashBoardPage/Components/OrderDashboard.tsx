import { Divider, Flex, Heading } from "@chakra-ui/react";
import useOrders from "../../../Hooks/UseOrders";
import OrderListItem from "./OrderListItem";

const OrderDashboard = () => {
  const { data } = useOrders();
  const orders = data;

  return (
    <Flex width={"100%"}>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        padding={"2rem"}
        gap={"1rem"}
      >
        <Heading textColor={"brand.500"}>Orders</Heading>
        <Flex
          flexDirection={"column"}
          bgColor={"#F8F8F8"}
          borderRadius={"20px"}
          //border={"1px solid gray"}
          padding={"2rem"}
          maxHeight={window.innerHeight}
          overflow={"scroll"}
          shadow={"lg"}
        >
          <Heading fontSize={"20px"}>All Orders</Heading>
          <Divider />
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            textColor={"#6F6F6E"}
            paddingY={"1rem"}
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
          <Flex flexDirection={"column"} gap={"0rem"} overflow={"scroll"}>
            {orders?.map((order: any) => (
              <OrderListItem key={order._id} order={order} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderDashboard;
