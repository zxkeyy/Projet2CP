import { Flex, Divider, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useUser from "../../../Hooks/useUser";

interface Props {
  order: any;
}

const OrderListItem = ({ order }: Props) => {
  const { data } = useUser(order.user_id);

  return (
    <Box
      _hover={{
        bgColor: "#F0F0F0",
      }}
    >
      <Link to={`/dashboard/orders/${order._id}`}>
        <Flex
          key={order._id}
          width={"100%"}
          justifyContent={"space-between"}
          paddingY={"1rem"}
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
            {data?.username ?? "Unknown"}
          </Text>
        </Flex>
        <Divider key={order.createdAt} />
      </Link>
    </Box>
  );
};

export default OrderListItem;
