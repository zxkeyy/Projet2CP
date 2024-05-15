import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormState{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;// For frontend validation only
}

const EditProfilePage = () =>{
    const {register, handleSubmit, watch, formState: {errors}} = useForm<FormState>();
    const password = watch("password");
    const toast = useToast();

    const onSubmit: SubmitHandler<FormState> = async (data) => {
        const { confirmPassword, ...submitData } = data; // Exclude confirm password from request
        try {
          const response = await axios.post('http://localhost:5000/user/update', submitData, { withCredentials: true });
    
          if (response.status === 201) {
            toast({
                title: "Profile updated successfuly!",
                description: "",
                status: "success",
                duration: 5000,
                isClosable: true, 
                position: "top-right", 
            });
            console.log(response);
          }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const statusCode = error.response?.status;
                const message = error.response?.data;
        
                if (statusCode === 400 && message) {
                    toast({
                        title: "Update failed",
                        description: message,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        position: "top-right",
                    });
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
        <Box p="50px">
            <Flex justifyContent="space-between">
                <Text fontSize="lg" fontWeight="500"> 
                    Home / <span style={{color:"#009688"}}> My Account </span>
                </Text>
                <Text fontSize="lg" fontWeight="500">
                    Welcome <span style={{color:"#009688"}}> User </span>  
                </Text>
            </Flex>
            <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                >
                <GridItem 
                    rowSpan={2} 
                    colSpan={1} 
                    p="20px">
                    <Text fontWeight="500" fontSize={{base:"md",md:"lg"}} cursor="pointer" _hover={{color:"#009688"}} mb="10px">My Profile</Text>
                    <Text fontSize={{base:"md",md:"lg"}} cursor="pointer" fontWeight="500" _hover={{color:"#009688"}}>My Orders</Text>
                </GridItem>
                <GridItem 
                    colSpan={4} 
                    as="form"  
                    flexDir="column"
                    onSubmit={handleSubmit(onSubmit)} 
                    method="post" 
                    p="20px 60px"
                    boxShadow="0px 1px 13px 0px #0000000D"
                    m="15px"
                    display="flex"
                    maxW="900px"
                    gap={4}
                    >
                    <Heading color="#009688">Edit Your Profile</Heading>
                    <FormControl mt="7px" isInvalid={!!errors.username}>
                            <FormLabel fontSize="md">Username</FormLabel>
                            <Input
                                fontSize="md"
                                {...register("username", {minLength: {value: 4, message: "Username must be at least 4 characters"}})}
                                type="text"
                                placeholder="Paul ZINSOU"
                                h="50px"
                                bg="#F4F4F4"/>
                            <FormErrorMessage>
                                {errors.username && errors.username.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt="8px">
                            <FormLabel fontSize="md">E-mail</FormLabel>
                            <Input
                                fontSize="md" 
                                {...register("email")}
                                type="email"
                                placeholder="paul@gmail.com"
                                h="50px"
                                bg="#F4F4F4"/>

                        </FormControl>
                        <FormControl mt="8px" isInvalid={!!errors.password}>
                            <FormLabel fontSize="md">Password</FormLabel>
                            <Input
                                fontSize="md" 
                                {...register("password", {minLength: {value: 6, message: "Password must be at least 6 characters"}})}
                                type="password"
                                placeholder="Your new password"
                                h="50px"
                                bg="#F4F4F4"/>
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                        </FormControl>

                        <FormControl mt="8px" isInvalid={!!errors.confirmPassword}>
                            <FormLabel fontSize="md">Confirm password</FormLabel>
                            <Input
                                fontSize="md"
                                {...register("confirmPassword", {validate: (value) => value === password || "Passwords do not match"})}
                                type="password"
                                placeholder="Confirm your password"
                                h="50px"
                                bg="#F4F4F4"/>
                                <FormErrorMessage>
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </FormErrorMessage>
                        </FormControl>
                        <Button size="lg" 
                            color="#FFFFFF" 
                            bg="#009688" 
                            w="230px" 
                            borderRadius="5px" 
                            h="50px"  
                            mt="20px"
                            _hover={{color:"#000000", bg:"#F3F3F9"}} 
                            type="submit"
                            alignSelf="flex-end">
                            Save changes
                        </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default EditProfilePage;