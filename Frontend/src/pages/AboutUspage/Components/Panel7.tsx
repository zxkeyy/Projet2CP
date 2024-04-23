import { Box, Card, CardBody, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Image1 from "../../../assets/aboutPanel7Image1.png";
import Image2 from "../../../assets/aboutPanel7Image2.png";
import Image3 from "../../../assets/aboutPanel7Image3.png";

const Panel7 = () =>{
    return(
        <VStack m="60px 0px">
            <Text 
                fontSize="sm"
                fontWeight="700"
                color="#009688">
                Professional Team
            </Text>
            <Heading
                color='#0E0E0E' 
                size="lg">
                Meet Our Experts
            </Heading>
            <Box
                m="5px 0px"
                h="4px"
                w="45px"
                borderRadius="30px"
                bg="#009688">
            </Box>
            <Flex 
                flexWrap="wrap" justifyContent="center">
                <Card
                    m="20px">
                    <CardBody>
                        <Image 
                            src={Image1}
                            boxSize="300px"
                            borderRadius="10px">
                        </Image>
                        <VStack mt ="15px">
                            <Heading size="md">
                                Peterson
                            </Heading>
                            <Text 
                                fontSize="xs" 
                                fontWeight="700"
                                color="#009688">
                                Team Leader
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
                <Card m="20px">
                    <CardBody>
                        <Image 
                            src={Image2}
                            boxSize="300px"
                            borderRadius="10px">
                        </Image>
                        <VStack mt ="15px">
                            <Heading size="md">
                                Henna
                            </Heading>
                            <Text 
                                fontSize="xs"
                                fontWeight="700"
                                color="#009688">
                                Designer
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
                <Card m="20px">
                    <CardBody>
                        <Image 
                            src={Image3}
                            boxSize="300px"
                            borderRadius="10px">
                        </Image>
                        <VStack mt="15px">
                            <Heading size="md">
                                Olivia
                            </Heading>
                            <Text 
                                fontSize="xs" 
                                fontWeight="700"
                                color="#009688">
                                Marketing Manager
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
            </Flex>
            <Box
                m="5px 0px"
                h="7px"
                w="38px"
                border="solid 1px #1F2247
                "
                borderRadius="30px"
                bg="#009688">
            </Box>
        </VStack>
    );
} 
export default Panel7;