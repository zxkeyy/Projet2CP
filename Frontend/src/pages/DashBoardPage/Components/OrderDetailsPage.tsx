import { useParams } from "react-router-dom";
import useOrders from "../../../Hooks/UseOrders";
import useUser from "../../../Hooks/useUser";
import { Flex } from "@chakra-ui/react";

const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useOrders();
  const orders = data;

  const order = orders?.find((order: any) => order._id === id);
  const { data: userData } = useUser(order.user_id);

  console.log(order);
  console.log(userData);

  return <Flex></Flex>;
};

export default OrderDetailsPage;
