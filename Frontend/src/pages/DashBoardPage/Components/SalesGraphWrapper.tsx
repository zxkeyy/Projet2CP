import { Flex, Heading, Select } from "@chakra-ui/react";
import { useState } from "react";
import SalesGraph from "./SalesGraph";
import useOrders from "../../../Hooks/UseOrders";

const SalesGraphWrapper = () => {
  const [days, setDays] = useState(30);
  const { data: orders } = useOrders();

  const totalSales = orders?.reduce(
    (total: number, order: any) => total + order.total_price,
    0
  );

  return (
    <Flex
      width={"650px"}
      flexDirection={"column"}
      height={"fit-content"}
      bgColor={"white"}
      borderRadius={"1rem"}
      boxShadow={"base"}
      shadow={"lg"}
      padding={"1rem"}
    >
      <Flex justifyContent={"space-between"} padding={"1rem"}>
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Heading fontSize={"20px"} textColor={"graytext"}>
            Total Sales
          </Heading>
          <Heading fontSize={"26px"}>${totalSales}</Heading>
        </Flex>
        <Flex alignItems={"center"} gap={"1rem"}>
          <Heading fontSize={"14px"}>Sales in the last: </Heading>
          <Select
            defaultValue={days.toString()}
            width={"fit-content"}
            onChange={(e) => setDays(parseInt(e.target.value))}
            colorScheme="teal"
          >
            <option value="7">7 Days</option>
            <option value="30">30 Days</option>
            <option value="365">365 Days</option>
          </Select>
        </Flex>
      </Flex>

      <SalesGraph days={days} />
    </Flex>
  );
};

export default SalesGraphWrapper;
