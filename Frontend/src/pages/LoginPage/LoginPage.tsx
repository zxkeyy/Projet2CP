import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import bgImg from "../../assets/LoginImage.png";
import Logo from "../../assets/BlueLogo.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const toast = useToast();
  const Navigate = useNavigate();

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/logIn",
        data,
        { withCredentials: true }
      );
      if (response.status === 201) {
        const user: any = response.data;

        toast({
          title: "Login successful!",
          description: `Welcome again, ${user.username}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
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
            position: "bottom",
          });
        }
      }
      toast({
        title: "Unexpected error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgImg={`linear-gradient(rgba(0, 150, 136, 0.81), rgba(0, 150, 136, 0.81)), url(${bgImg})`}
        w="50%"
        h="100vh"
        color="#FFFFFF"
        display={{ base: "none", md: "flex" }}
      >
        <Heading fontSize="4xl" fontWeight="900">
          Back ?
        </Heading>
        <Heading
          fontSize="2xl"
          textAlign="center"
          fontWeight="500"
          lineHeight="52.73px"
          mt="10px"
        >
          Don't wait for a break-in.
          <br />
          Safeguard your property today.
        </Heading>
        <Box bg="#FFFFFF" h="7px" w="100px" borderRadius="5px" mt="20px"></Box>
        <Link to="/">
          <Image h="170px" src={Logo}></Image>
        </Link>
      </Flex>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        w={{ base: "100%", lg: "50%" }}
        p="20px"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          w="450px"
          boxShadow="0px 2px 18px 0px rgba(0, 0, 0, 0.1)"
          p="20px 60px"
          gap={4}
          borderRadius="8px"
          mt={{ base: "150px", md: "0px" }}
          mb={{ base: "50px", md: "0px" }}
        >
          <Heading fontWeight="500" color="#009688" fontSize="3xl">
            Log in
          </Heading>
          <Text color="#474749" fontSize="sm">
            Log in to access your space
          </Text>
          <Flex
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            flexDirection="column"
            gap="5px"
            w="100%"
            alignItems="center"
          >
            <FormControl mt="7px" isRequired isInvalid={!!errors.email}>
              <FormLabel fontSize="sm" color="#7F7E83">
                E-mail
              </FormLabel>
              <Input
                fontSize="sm"
                {...register("email", { required: "email is required" })}
                type="email"
                placeholder="paul@gmail.com"
                h="48px"
                bg="#F4F4F4"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt="7px" isRequired isInvalid={!!errors.password}>
              <FormLabel fontSize="sm" color="#7F7E83">
                Password
              </FormLabel>
              <Input
                fontSize="sm"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must have at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Your password"
                h="48px"
                bg="#F4F4F4"
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              size="md"
              color="#FFFFFF"
              bg="#009688"
              w="200px"
              borderRadius="10px"
              h="45px"
              mt="20px"
              _hover={{ color: "#000000", bg: "#F3F3F9" }}
              type="submit"
            >
              Connection
            </Button>
          </Flex>
          <Text my="5px" fontSize="sm">
            You do not have an account ?
            <Link
              to="/Sign-up"
              style={{ color: "#00A551", textDecoration: "underline" }}
            >
              Create account
            </Link>
            <Link
              to="/Forget-password"
              style={{ color: "#00A551", textDecoration: "underline" }}
            >
              <br />
              Forget password ?
            </Link>
          </Text>
        </Flex>
        <Box pos="relative" mt="20px">
          <Divider border="solid 1px #1F2247" w="350px" />
          <AbsoluteCenter
            bg="#FFFFFF"
            px="4"
            color="#009688"
            fontWeight="700"
            fontSize="sm"
          >
            Or
          </AbsoluteCenter>
        </Box>
        <Flex mt="15px" gap={5}>
          <a href="http://localhost:5000/auth/google">
            <Button
              fontSize="sm"
              h="35px"
              w="178"
              borderRadius="50px"
              bg="#F7F7F7"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              border="solid 1px #EEEEEE"
              leftIcon={<FcGoogle />}
            >
              Login with Google
            </Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
