import { Flex, Heading, Select } from "@chakra-ui/react";
import { useState } from "react";
import OrdersGraph from "./OrdersGraph";

const OrderGraphWrapper = () => {
  const [days, setDays] = useState(30);

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
      <Flex alignItems={"center"} justifyContent={"end"} gap={"1rem"}>
        <Heading fontSize={"14px"}>Orders in the last: </Heading>
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

      <OrdersGraph days={days} />
    </Flex>
  );
};

export default OrderGraphWrapper;
