import { AbsoluteCenter, Box, Button, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";



import bgImg from "../../assets/LoginImage.png"
import Logo from "../../assets/BlueLogo.png"
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <Flex>
            <Flex 
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                bgImg={`linear-gradient(rgba(0, 150, 136, 0.81), rgba(0, 150, 136, 0.81)), url(${bgImg})`}
                w="50%"
                h="100vh"
                color="#FFFFFF"
                display={{base:"none", md:"flex"}}>
                <Heading fontSize="6xl" fontWeight="900">
                    Back ?
                </Heading>
                <Heading 
                    fontSize="4xl"    
                    textAlign="center"
                    fontWeight="500"
                    lineHeight="52.73px"
                    mt="10px">
                Don't wait for a break-in.<br/> 
                Safeguard your property today.
                </Heading>
                <Box 
                    bg="#FFFFFF"
                    h="8px"
                    w="100px"
                    borderRadius="5px"
                    mt="40px"
                    >
                </Box>
                <Link to="/">
                <Image h="200px" src={Logo}></Image>
                </Link>
            </Flex>
            <Flex 
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                w={{base:"100%", lg:"50%"}}
                p="20px">
                <Flex 
                    flexDir="column"
                    alignItems="center"
                    w="600px"
                    boxShadow="0px 2px 18px 0px rgba(0, 0, 0, 0.1)"
                    p="40px 60px"
                    gap={4}
                    borderRadius="8px">
                    <Heading fontWeight="500" color="#009688">Log in</Heading>
                    <Text color="#474749">Log in to access your space</Text>
                    <form action="p" method="post" style={{display:"flex", flexDirection:"column", gap:"10px",width:"100%", alignItems:"center"}}>
                        <FormControl isRequired>
                            <FormLabel color="#7F7E83">E-mail</FormLabel>
                            <Input 
                                type="email"
                                placeholder="paul@gmail.com"
                                h="48px"
                                bg="#F4F4F4
                                " />
                        </FormControl>
                        <FormControl mt="30px" isRequired>
                            <FormLabel color="#7F7E83">Password</FormLabel>
                            <Input 
                                type="password"
                                placeholder="Your password"
                                h="48px"
                                bg="#F4F4F4
                                "
                                color=""/>
                        </FormControl>
                        <Button size="lg" color="#FFFFFF" bg="#009688" w="262px" borderRadius="10px" h="56px"  mt="30px" _hover={{color:"#000000", bg:"#F3F3F9"}} type="submit">Connection</Button>
                    </form>
                    <Text my="10px">You do not have an account ? <Link to="/Sign-up" style = {{color:"#00A551", textDecoration:"underline"}}>Create an account</Link></Text>
                </Flex>
                <Box pos="relative" mt="40px">
                    <Divider border="solid 1px #1F2247" w="350px"/>
                    <AbsoluteCenter bg="#FFFFFF" px='4' color="#009688" fontWeight="700">
                        Or
                    </AbsoluteCenter>
                </Box>
                <Flex mt="50px" gap={5}>
                    <Button 
                        h="48px" 
                        w="178" 
                        borderRadius="50px"
                        bg="#F7F7F7"
                        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                        border="solid 1px #EEEEEE"
                        leftIcon={<FcGoogle/>}>
                            Log In with Google
                        </Button>
                    <Button 
                        h="48px" 
                        w="178" 
                        borderRadius="50px"
                        bg="#F7F7F7"
                        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                        border="solid 1px #EEEEEE"
                        color="#039BE5"
                        leftIcon={<MdFacebook/>}>
                        <span style={{color:"#000000"}}>
                            Log In with Facebook
                        </span>
                    </Button>
                    
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Login;