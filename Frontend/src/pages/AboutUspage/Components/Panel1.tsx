import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import Image1 from "../../../assets/aboutPanel1Image1.png";
import { MdChevronRight } from 'react-icons/md'

const Panel1 = () => {
  return (
        <Box 
        backgroundSize="cover"
        backgroundPosition="center"
        h="220px"
        backgroundImage={`linear-gradient(rgba(7, 14, 32, 0.81), rgba(7, 14, 32, 0.81)), url(${Image1})`}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="#FFFFFF"
        gap={5}>
            <Heading>
                About Us
            </Heading>
            <Box
            display="flex"
            alignItems="center"
            >
                <Text
                color="#009688">Home</Text>
                <Icon as={MdChevronRight} color="#009688" mt="3px" mr="20px"/> 
                <Text>About Us</Text>
            </Box>
        </Box>
  );
}
export default Panel1;