import { Flex, Heading } from "@chakra-ui/react";
import OrderGraphWrapper from "./OrderGraphWrapper";
import SalesGraphWrapper from "./SalesGraphWrapper";

const DashBoard = () => {
  return (
    <Flex padding={"1rem"} gap={"1rem"} flexDir={"column"}width={"100%"} height={window.innerHeight} overflow={"scroll"}>
      <Flex>
        <Heading textColor={"brand.500"}>Overview</Heading>
      </Flex>
      <OrderGraphWrapper />
      <SalesGraphWrapper />
    </Flex>
  );
};

export default DashBoard;
