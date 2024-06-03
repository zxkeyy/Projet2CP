import { Box, Center, Flex, Spinner } from "@chakra-ui/react";

const Loadingpage = () => {
  return (
    <Center h="510px">
      {" "}
      {/* Center the content vertically */}
      <Flex justifyContent="center" alignItems="center">
        <Spinner size="xl" color="#009688" /> {/* Large spinner */}
        <Box fontSize="xl" fontWeight="bold" ml={4}>
          Loading...
        </Box>
      </Flex>
    </Center>
  );
};
export default Loadingpage;
