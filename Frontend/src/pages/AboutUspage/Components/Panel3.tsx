import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Image1 from "../../../assets/aboutPanel3Image1.png";
import Image2 from "../../../assets/aboutPanel3Image2.png";
import { RxTriangleRight } from "react-icons/rx";

const Panel1 = () => {
    return (
          <Box
          backgroundSize="cover"
          backgroundPosition="center"
          h="430px"
          backgroundImage={`linear-gradient(rgba(7, 14, 32, 0.81), rgba(7, 14, 32, 0.81)), url(${Image1})`}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#FFFFFF"
          gap={{base:0 ,md:20}}
          p="20px">
            <Box
            display="flex"
            flexDir="column"
            gap={{base: 10, md: 5}}>
                <Box
                    bg="#0D6A68"
                    h={{base:"60px" , md:"100px"}}
                    w={{base:"60px" , md:"100px"}}
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Box
                        bg="#009688"
                        h={{base:"40px" , md:"50px"}}
                        w={{base:"40px" , md:"50px"}}
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Icon as={RxTriangleRight} boxSize={{base:7,md:10}}></Icon>
                        </Box>
                </Box>
                
                <Heading size="lg">
                Introducing The Most Easiest <br/>
                Security Systems
                </Heading>
                <Text
                    fontSize="xs"
                    color="#797979">
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod <br/> tempor incididunt labore dolore magna aliqua enim ad minim veniam.
                </Text>
            </Box>
            <Image src={Image2} boxSize={{base: "250px",md:"400px"}} mt={{base:"180px",md:"30px"}} />
          </Box>
    );
  }
  export default Panel1;