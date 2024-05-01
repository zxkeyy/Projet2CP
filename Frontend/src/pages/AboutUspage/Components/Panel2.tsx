import { FaCheckCircle } from "react-icons/fa";
import Image1 from "../../../assets/aboutPanel2Image1.png";
import Image2 from "../../../assets/aboutPanel2Image2.png";
import Image3 from "../../../assets/aboutPanel2Image3.png";

import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";

const Panel2 =() => {
    return (
        <Box 
        display="flex"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        margin="20px 0px"
        gap={10}
        alignItems={{base:"center", md: "normal"}}

        >
            <Box pos="relative"
                w="250px"
                h="250px"
                mb="50px"
                >
                 <Box
                    pos="absolute"
                    top="250px"
                    left="-8"
                    borderWidth="0"
                    borderBottomWidth="60px"
                    borderRightWidth="60px"
                    borderStyle="solid"
                    borderColor="transparent"
                    borderRightColor="#009688"
                />
                <Image
                    src={Image3}
                    boxSize="150px"
                    position="absolute"
                    top="70px"
                    left="70px"
                />
                 <Image
                    src={Image1}
                    boxSize="200px"
                    position="absolute"
                    top="35px"
                    left="-20"
                />
                <Image
                    src={Image2}
                    boxSize="200px"
                    position="absolute"
                    top="130px"
                    left="40px"
                />
                
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                margin="10px"
                gap={5}>
                <Heading size="lg">
                    We are Taking Small Steps to<br/>
                    Make Earth Better Planet
                </Heading>
                <Box
                    margin="15px 0px"
                    h="5px"
                    maxW="50px"
                    borderRadius="15px"
                    bg="#009688"></Box>
                <Text 
                    fontSize="xs"
                    color="#797979">
                    “Bring to the table win-win survival strategies to ensure proactive<br/>
                    domination. At the end of the day”
                </Text>
                <Box 
                    display="flex"
                    flexDirection="column"
                gap={4}
                margin="15px 0px">
                    <Box
                    display="flex"
                    p="10px"
                    maxH="100px"
                    borderRadius="10px"
                    bg="white"
                    gap={2}>
                        <Icon 
                        as={FaCheckCircle}
                        color="#09688"
                        fontSize="xl"></Icon>
                        <Text 
                        fontSize="xs"
                        color="#797979">
                            There are many variations words passages of Lorem<br/> 
                            Ipsum don't available, but the majority.
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        maxH="100px"
                        bg="white"
                        borderRadius="10px"
                        p="10px"
                        gap={2}>
                        <Icon 
                        as={FaCheckCircle}
                        color ="#09688"
                        fontSize="xl"></Icon>
                        <Text 
                        fontSize="xs"
                        color="#797979">Our Wiguard - CCTV & Security WP Theme is an amazing<br/>designed themefor all type of Security Firms.</Text>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    )
}
export default Panel2;