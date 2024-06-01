import { Avatar, AvatarBadge, Box, Divider, Flex, Grid, GridItem, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";




const Contactspage = () => {
  return (
    <Flex flexDir='column' p="10px 50px" gap={5}>
      <Text fontSize="lg" fontWeight="500"> 
        Home / 
        <Box as="span" color="#009688"> Contact </Box>
      </Text>
      <Grid
        my="50px"
        templateAreas={{ base: `"main" "nav"`, md: `"nav main"` }}
        gridTemplateColumns={{base:'1fr', md:'25% 1fr'}}
        gap='8'
        color='black'
        fontWeight='bold'
        justifyContent="center"
      >
        <GridItem 
          bg="white"
          p='20px' 
          display="flex" 
          flexDir={{base: "row", md: "column"}}
          borderRadius="10px"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
          color="gray.700"
          area={'nav'}>
          <Box display={{base:"none", md:"flex"}} flexDir="column" >
            <Avatar alignSelf="center" boxSize="100px">
              <AvatarBadge boxSize='1.5em' bg='green.500' />
            </Avatar>
            <Text alignSelf="center" my="10px" color="black" fontWeight="500">Technical support</Text>
          </Box>
          <Box fontSize={{base:"sm", md:"md"}} mr={{base:"65px", md:"0"}}>
            <HStack mb="15px">
              <Flex h="40px" w="40px" alignItems="center" borderRadius="50%" justifyContent="center"
              bg="#009688">
                <Icon as={LuPhone} boxSize={6}  color="#FFFFFF"></Icon>
              </Flex>
              <Text fontSize="lg" color="black" fontWeight="500">Call To Us</Text>
            </HStack>
            <Text display={{base:"none", md:"block"}}>We are available 24/7, 7 days a week.</Text>
            <Text my="10px">Phone:+213 6061 2335</Text>
          </Box>
          <Divider my="10px" display={{base:"none", md:"block"}} borderColor="black" />
          <Box fontSize={{base:"sm", md:"md"}}>
            <HStack mb="15px">
              <Flex h="40px" w="40px" alignItems="center" borderRadius="50%" justifyContent="center"
              bg="#009688">
                <Icon as={MdOutlineEmail} boxSize={6}  color="#FFFFFF"></Icon>
              </Flex>
              <Text  fontSize="lg" color="black" fontWeight="500">Write To Us</Text>
            </HStack>
            <Text display={{base:"none", md:"block"}}>Fill out our form and we will contact<br/>you within 24 hours.</Text>
            <Text my="10px">Emails: <br /> abderahmanebaha@gmail.com</Text>
            <Text>bahatechnologie@gmail.com</Text>
          </Box>
        </GridItem>
        <GridItem 
          borderRadius="10px" 
          bg="white" 
          display="flex" 
          flexDir="column" 
          boxShadow="0 0 10px rgba(0,0,0,0.1)" 
          area={'main'}>
          <HStack p="5px" borderBottom="solid 1px #f3f1ee" bg="">
            <Avatar alignSelf="center" boxSize="30px">
              <AvatarBadge boxSize="0.85em" bg='green.500' />
            </Avatar>
            <Text alignSelf="center" my="5px" color="black" fontWeight="400" fontSize="xs">Technical support <br /><Box fontSize="11px" color="Gray">online</Box></Text>
          </HStack>
          <Flex flex="1" gap={3} flexDir="column" p="10px">
            <Box  
              maxW="50%"
              alignSelf="flex-start" 
              p="10px" 
              borderRadius="30px" 
              bg="bg.500">
                <Text fontWeight="500">Hello world</Text>
              </Box>
              <Box 
              maxW="50%"
              alignSelf="flex-end" 
              p="10px" 
              borderRadius="30px" 
              bg="#009688">
                <Text color="#FFFFFF" fontWeight="500">Hello world</Text>
              </Box>
            
          </Flex>
          <HStack p="10px">
          <Input
            type="text"
            bg="bg.500"
            borderRadius="30px"
            _hover={{ outline: "none", borderColor: "transparent" }}
            _focus={{ outline: "none", borderColor: "#009688", boxShadow: "base" }}
            placeholder="Type a message..."
          />
            <Flex as="button" h="40px" w="70px" alignItems="center" borderRadius="20px" justifyContent="center"
            bg="#009688">
              <Icon as={FiSend} boxSize={5}  color="#FFFFFF"></Icon>
            </Flex>
          </HStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default Contactspage;