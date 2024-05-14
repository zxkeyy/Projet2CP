import { Box, Flex, Heading, Image, Progress, Text } from "@chakra-ui/react";
import Image1 from "../../../assets/aboutPanel6Image1.png";

const Panel6 = () =>{
    return(
        <Flex flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            m="50px 0px"
            gap={20}
            color="#4C4B51">
            <Image 
                src={Image1} 
                boxSize="350px"
                borderRadius="20px"></Image>
            <Flex flexDir="column" gap={3}>
                <Box
                    h="5px"
                    maxW="50px"
                    borderRadius="15px"
                    bg="#009688">
                </Box>
                <Heading 
                    color='#292734' 
                    size="lg"
                    alignSelf="center">
                    Our Skills
                </Heading>
                <Text
                    fontSize="sm"
                    lineHeight="2">
                    Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, <br/>vel rutrum erat
                    commodo ut. Praesent finibus congue euismod.
                </Text>
                <Flex justifyContent="space-between" mb= "3px">
                    <Text
                        fontSize="sm">
                        Security Consulting
                    </Text>
                    <Text
                        fontSize="sm">
                        95%
                    </Text>
                </Flex>
                <Progress colorScheme='gray' bg="bg.500" size='xs' value={95} />
                <Flex justifyContent="space-between" mb= "3px">
                    <Text
                        fontSize="sm">
                        Ratail Security
                    </Text>
                    <Text
                        fontSize="sm">
                        80%
                    </Text>
                </Flex>
                <Progress colorScheme='gray' bg="bg.500" size='xs' value={80} />
                <Flex justifyContent="space-between" mb= "3px">
                    <Text
                        fontSize="sm">
                        Alarm Response
                    </Text>
                    <Text
                        fontSize="sm">
                        90%
                    </Text>
                </Flex>
                <Progress colorScheme='gray' bg="bg.500" size='xs' value={90} />
                <Flex justifyContent="space-between" mb= "3px">
                    <Text
                        fontSize="sm">
                        Door Supervising
                    </Text>
                    <Text
                        fontSize="sm">
                        100%
                    </Text>
                </Flex>
                <Progress colorScheme='gray' bg="bg.500" size='xs' value={100} />
            </Flex>
        </Flex>
    );
}
export default Panel6;