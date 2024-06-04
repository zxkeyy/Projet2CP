import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import OrderGraphWrapper from "./OrderGraphWrapper";
import SalesGraphWrapper from "./SalesGraphWrapper";
import useAllUsers from "../../../Hooks/useAllUsers";
import useOrders from "../../../Hooks/UseOrders";
import useProducts from "../../../Hooks/useProducts";
import ProductDashboardCard from "./ProductDashboardCard";

const DashBoard = () => {
  const { data: users } = useAllUsers();
  console.log(users);
  const { data: orders } = useOrders();
  console.log(orders);
  const { data: products } = useProducts();
  console.log("products:" + products?.Products);

  const leaderboard = users?.slice(0, 5)?.map((user: any) => {
    return {
      username: user.username,
      orderCount: orders?.filter((order: any) => order?.user_id === user._id)
        .length,
    };
  });

  console.log(leaderboard);
  leaderboard?.sort((a: any, b: any) => b.orderCount - a.orderCount);
  console.log(leaderboard);

  return (
    <Flex
      padding={"2rem"}
      width={"100%"}
      height={window.innerHeight}
      overflow={"scroll"}
      justifyContent={"space-evenly"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Flex>
        <Heading textColor={"brand.500"}>Overview</Heading>
      </Flex>
      <Flex gap={"1rem"}>
        <Flex
          gap={"1rem"}
          flexDir={"column"}
          //width={"100%"}
          height={window.innerHeight - 100}
        >
          <OrderGraphWrapper />
          <SalesGraphWrapper />
        </Flex>
        <Flex flexDirection={"column"} gap={"1rem"}>
          <Flex
            flexDirection={"column"}
            width={"100%"}
            bgColor={"white"}
            height={"fit-content"}
            padding={"1rem"}
            gap={"1rem"}
            borderRadius={"15px"}
            shadow={"lg"}
          >
            <Heading fontSize={"18px"}>Top Customers</Heading>
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Text>Username</Text>
              <Text>Orders</Text>
            </Flex>
            <Divider />
            {leaderboard?.map((item: any) => (
              <Flex justifyContent={"space-between"} width={"100%"}>
                <Text>{item.username}</Text>
                <Text>{item.orderCount}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex
            flexDirection={"column"}
            width={"100%"}
            bgColor={"white"}
            height={"fit-content"}
            padding={"1rem"}
            gap={"1rem"}
            borderRadius={"15px"}
            shadow={"lg"}
          >
            <Heading fontSize={"18px"}>Popular Products</Heading>

            <Flex gap={"1rem"}>
              {products?.Products?.slice(0, 2)?.map((product) => (
                <ProductDashboardCard key={product._id} product={product} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
