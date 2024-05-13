import { Box, Button, Flex, FormControl,  FormLabel, HStack, Heading, Image, PinInput, PinInputField, Text, useToast } from "@chakra-ui/react"

import bgImg from "../../assets/LoginImage.png"
import Logo from "../../assets/BlueLogo.png"

import { useForm,SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface FormState {
    restCode: string;
    email: string;
}


const ActivateForgetPassword = () =>{

    const { handleSubmit} = useForm<FormState>();
    const toast = useToast();
    const Navigate = useNavigate();
    const [restCode, setRestCode] = useState<string>('');
    const location = useLocation();
    const email = location.state?.email || "";

    const handlePinInputChange = (value: string) => {
        setRestCode(value); 
    };
    const onSubmit: SubmitHandler<FormState> = async (data) => {
        try {
            const requestData = { ...data, email,restCode };
            console.log(requestData);
            const response = await axios.post('http://localhost:5000/user/activateForgetPassword',requestData, { withCredentials: true });
            if(response.status === 200){
                const user:any = response.data;

                toast({
                    title: "Login successful!",
                    description: `Welcome again, ${user.username}`,
                    status: "success",
                    duration: 5000,
                    isClosable: true, 
                    position: "top-right", 
                });
                Navigate("/");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const statusCode = error.response?.status;
                const message = error.response?.data;
        
                if (statusCode === 400 && message) {
                    toast({
                        title: "Login failed",
                        description: message,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        position: "top-right",
                    });
                }
            }
                toast({
                    title: "Unexpected error",
                    description: "Something went wrong. Please try again later.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                });
        }

    };
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
                <Box 
                    bg="#FFFFFF"
                    h="7px"
                    w="100px"
                    borderRadius="5px"
                    mt="20px"
                    >
                </Box>
                <Link to="/">
                <Image h="170px" src={Logo}></Image>
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
                    w="450px"
                    boxShadow="0px 2px 18px 0px rgba(0, 0, 0, 0.1)"
                    p="20px 60px"
                    gap={4}
                    borderRadius="8px"
                    mt={{base:"150px",md:"0px"}}
                    mb={{base:"50px",md:"0px"}}>
                    <Heading fontWeight="500" color="#009688" fontSize="3xl">Forget Password</Heading>
                    <Text color="#474749" fontSize="sm">access your space now</Text>
                    <Flex 
                        as="form" 
                        onSubmit={handleSubmit(onSubmit)} 
                        method="post" 
                        flexDirection="column" 
                        gap="5px" 
                        w="100%" 
                        alignItems="center">
                        <FormControl mt="7px" isRequired >
                            <FormLabel
                                fontSize="sm" 
                                color="#7F7E83">
                                Rest Code
                            </FormLabel>
                            <HStack ml="25px" >
                                <PinInput 
                                    defaultValue='000000'
                                    value={restCode}
                                    onChange={handlePinInputChange}>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </FormControl>
                        <Button 
                            size="md" 
                            color="#FFFFFF" 
                            bg="#009688" 
                            w="200px" 
                            borderRadius="10px" 
                            h="45px"  
                            mt="20px" 
                            _hover={{color:"#000000", bg:"#F3F3F9"}} type="submit">
                                Login
                            </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ActivateForgetPassword;