import { Flex, Heading } from "@chakra-ui/react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SuccessPage = () => {
  return (
    <Flex justify={"center"} alignItems={"center"} height={"600px"} flexDirection={"column"}>
        <Heading fontSize={"30px"}>Payment Successful</Heading>
      <IoIosCheckmarkCircle size={"200px"} color="green" />
    </Flex>
  );
};

export default SuccessPage;
