import { AbsoluteCenter, Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, Text, useToast } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

import axios from "axios";

import bgImg from "../../assets/SignUpImage.png"
import Logo from "../../assets/BlueLogo.png"

import { useForm , SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface FormState{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;// For frontend validation only
}


const SignUp = () =>{
    
    const {register, handleSubmit, watch, formState: {errors}} = useForm<FormState>();
    const Navigate = useNavigate();
    const toast = useToast();
    const password = watch("password");
    const onSubmit: SubmitHandler<FormState> = async (data) => {
    const { confirmPassword, ...submitData } = data; // Exclude confirm password from request
    try {
      const response = await axios.post('http://localhost:5000/user/register', submitData, { withCredentials: true });

      if (response.status === 200) {
        toast({
            title: "Signup successful!",
            description: "Check your email for verification.",
            status: "success",
            duration: 5000,
            isClosable: true, 
            position: "top-right", 
        });
        console.log(response);
        Navigate('/Login');
      }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const statusCode = error.response?.status;
            const message = error.response?.data;
    
            if (statusCode === 400 && message) {
                toast({
                    title: "Signup failed",
                    description: message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                });
              // Navigate to login if the server suggests it
              if (message.includes("go to login page")) {
                Navigate('/Login');
              }
            }
        }else {
            toast({
                title: "Unexpected error",
                description: "Something went wrong. Please try again later.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });
        }
    }
  };

   return(
        <Flex>
            <Flex 
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                bgImg={`linear-gradient(rgba(0, 150, 136, 0.81), rgba(0, 150, 136, 0.81)), url(${bgImg})`}
                bgSize="cover"
                bgPos="center"
                w="50%"
                h="100vh"
                color="#FFFFFF"
                display={{base:"none", md:"flex"}}>
                <Link to="/">
                <Image h="170px" src={Logo}></Image>
                </Link>
                <Heading 
                    fontSize="3xl"    
                    textAlign="center"
                    fontWeight="500"
                    lineHeight="52.73px">
                    Home Security Starts Here <br/>
                    Your safety is our priority
                </Heading>
                <Box 
                    bg="#FFFFFF"
                    h="7px"
                    w="100px"
                    borderRadius="5px"
                    mt="20px"
                    mb="80px"
                    >
                </Box>
            </Flex>
            <Flex 
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                w={{base:"100%", lg:"50%"}}
                p="10px">
                <Flex 
                    flexDir="column"
                    alignItems="center"
                    w="450px"
                    boxShadow="0px 2px 18px 0px rgba(0, 0, 0, 0.1)"
                    p="30px 60px"
                    gap={4}
                    borderRadius="8px">
                    <Heading fontWeight="500" color="#009688" fontSize="3xl">Create account</Heading>
                    <Flex
                        as="form" 
                        onSubmit={handleSubmit(onSubmit)} 
                        method="post"  
                        flexDirection="column" 
                        gap="5px"
                        w="100%" 
                        alignItems="center">
                        <FormControl mt="7px" isRequired isInvalid={!!errors.username}>
                            <FormLabel color="#7F7E83" fontSize="sm">Username</FormLabel>
                            <Input
                                fontSize="sm"
                                {...register("username", {required: "This field is required", minLength: {value: 4, message: "Username must be at least 4 characters"}})}
                                type="text"
                                placeholder="Paul ZINSOU"
                                h="40px"
                                bg="#F4F4F4"/>
                            <FormErrorMessage>
                                {errors.username && errors.username.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt="8px" isRequired>
                            <FormLabel color="#7F7E83" fontSize="sm">E-mail</FormLabel>
                            <Input
                                fontSize="sm" 
                                {...register("email", {required: "This field is required"})}
                                type="email"
                                placeholder="paul@gmail.com"
                                h="40px"
                                bg="#F4F4F4"/>

                        </FormControl>
                        <FormControl mt="8px" isInvalid={!!errors.password} isRequired>
                            <FormLabel color="#7F7E83" fontSize="sm">Password</FormLabel>
                            <Input
                                fontSize="sm" 
                                {...register("password", {required: "This field is required", minLength: {value: 6, message: "Password must be at least 6 characters"}})}
                                type="password"
                                placeholder="Your password"
                                h="40px"
                                bg="#F4F4F4"/>
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                        </FormControl>

                        <FormControl mt="8px" isInvalid={!!errors.confirmPassword} isRequired>
                            <FormLabel color="#7F7E83" fontSize="sm">Confirm password</FormLabel>
                            <Input
                                fontSize="sm"
                                {...register("confirmPassword", {required: "This field is required", validate: (value) => value === password || "Passwords do not match"})}
                                type="password"
                                placeholder="Confirm your password"
                                h="40px"
                                bg="#F4F4F4"/>
                                <FormErrorMessage>
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </FormErrorMessage>
                        </FormControl>
                        
                        <Button size="md" 
                            color="#FFFFFF" 
                            bg="#009688" 
                            w="230px" 
                            borderRadius="10px" 
                            h="45px"  
                            mt="20px"
                            _hover={{color:"#000000", bg:"#F3F3F9"}} 
                            type="submit">
                            Create your account
                        </Button>
                    </Flex>
                    <Text 
                        my="5px"
                        fontSize="sm">
                            Already have an account ? 
                            <Link to="/Login" style = {{color:"#00A551", textDecoration:"underline"}}>
                                Log in
                            </Link>
                    </Text>
                </Flex>
                <Box pos="relative" mt="20px">
                    <Divider border="solid 1px #1F2247" w="350px"/>
                    <AbsoluteCenter bg="#FFFFFF" px='4' color="#009688" fontWeight="700" fontSize="sm">
                        Or
                    </AbsoluteCenter>
                </Box>
                <Flex mt="15px" gap={5}>
                    <Button 
                        fontSize="sm"
                        h="35px" 
                        w="178" 
                        borderRadius="50px"
                        bg="#F7F7F7"
                        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                        border="solid 1px #EEEEEE"
                        leftIcon={<FcGoogle/>}>
                            Sign up with Google
                        </Button>
                    <Button 
                        fontSize="sm"
                        h="35px" 
                        w="178" 
                        borderRadius="50px"
                        bg="#F7F7F7"
                        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                        border="solid 1px #EEEEEE"
                        color="#039BE5"
                        leftIcon={<MdFacebook/>}>
                        <Box as="span" color="#000000">
                            Sign up with Facebook
                        </Box>
                    </Button>
                    
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SignUp;