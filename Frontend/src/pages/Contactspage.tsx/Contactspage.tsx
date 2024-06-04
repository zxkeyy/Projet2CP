import { useState, useEffect } from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import initializeSocket from "../../services/socket";
import useUserData from "../../Hooks/useUserData";
import Loadingpage from "../Loadingpage/Loadingpage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Message {
  userId: string;
  toUserId: string;
  text: string;
  from_admin: boolean;
  timestamp: Date;
}
let online: boolean = false;

const Contactspage = () => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<any>(null);
  const { data, isLoading } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyOnline = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/message/verifyOnlineUser",
          { userId: "6632513ff12a4ab1455d9edc" },
          { withCredentials: true }
        );
        online = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    verifyOnline();
  }, []);

  useEffect(() => {
    const getMes = async () => {
      if (data && data._id) {
        const userId = data._id;
        localStorage.setItem("userId", userId);

        const socketInstance = initializeSocket();
        setSocket(socketInstance);

        socketInstance.emit("join", { userId });

        // Listen for incoming messages from the server
        socketInstance.on("message", (message: Message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });
        try {
          const response1 = await axios.get(
            "http://localhost:5000/message/getAllUserMessage",
            { withCredentials: true }
          );
          setMessages(response1.data);
          /*if (data.role == "admin"){
          const response2 = await axios.post("http://localhost:5000/message/getAllUserMessageForAdmin", {userId:"663261e948eaa8fcb5ae6c5f"}, {withCredentials: true});

          setMessages(prevMessages => [...prevMessages, response2.data]);
        }*/
        } catch (error) {
          console.log(error);
        }

        // Clean up socket connection on unmount
        return () => {
          if (socketInstance) {
            socketInstance.disconnect();
          }
        };
      }
    };
    getMes();
  }, [data]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        userId: data?._id || "user_id",
        toUserId: "6632513ff12a4ab1455d9edc",
        text: inputMessage,
        from_admin: data.role == "admin" ? true : false,
        timestamp: new Date(),
      };

      // Emit the message to the server
      if (socket) {
        const response = await axios.post(
          "http://localhost:5000/message/createMessage",
          newMessage,
          { withCredentials: true }
        );
        console.log(response);
      }

      // Update local state to immediately display the sent message
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  if (isLoading) {
    return <Loadingpage />; // Replace with your loading indicator/component
  }
  console.log("second" + online);
  return (
    <Flex flexDir="column" p="10px 50px" gap={5}>
      <Text fontSize="lg" fontWeight="500">
        Home /
        <Box as="span" color="#009688">
          {" "}
          Contact{" "}
        </Box>
      </Text>
      <Grid
        my="50px"
        templateAreas={{ base: `"main" "nav"`, md: `"nav main"` }}
        gridTemplateColumns={{ base: "1fr", md: "25% 1fr" }}
        gap="8"
        color="black"
        fontWeight="bold"
        justifyContent="center"
      >
        <GridItem
          bg="white"
          p="20px"
          display="flex"
          flexDir={{ base: "row", md: "column" }}
          borderRadius="10px"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
          color="gray.700"
          area={"nav"}
        >
          <Box display={{ base: "none", md: "flex" }} flexDir="column">
            <Avatar alignSelf="center" boxSize="100px">
              <AvatarBadge
                boxSize="1.5em"
                bg={online ? "green.500" : "bg.500"}
              />
            </Avatar>
            <Text alignSelf="center" my="10px" color="black" fontWeight="500">
              Technical support
            </Text>
          </Box>
          <Box
            fontSize={{ base: "sm", md: "md" }}
            mr={{ base: "65px", md: "0" }}
          >
            <HStack mb="15px">
              <Flex
                h="40px"
                w="40px"
                alignItems="center"
                borderRadius="50%"
                justifyContent="center"
                bg="#009688"
              >
                <Icon as={LuPhone} boxSize={6} color="#FFFFFF"></Icon>
              </Flex>
              <Text fontSize="lg" color="black" fontWeight="500">
                Call To Us
              </Text>
            </HStack>
            <Text display={{ base: "none", md: "block" }}>
              We are available 24/7, 7 days a week.
            </Text>
            <Text my="10px">Phone:+213 6061 2335</Text>
          </Box>
          <Divider
            my="10px"
            display={{ base: "none", md: "block" }}
            borderColor="black"
          />
          <Box fontSize={{ base: "sm", md: "md" }}>
            <HStack mb="15px">
              <Flex
                h="40px"
                w="40px"
                alignItems="center"
                borderRadius="50%"
                justifyContent="center"
                bg="#009688"
              >
                <Icon as={MdOutlineEmail} boxSize={6} color="#FFFFFF"></Icon>
              </Flex>
              <Text fontSize="lg" color="black" fontWeight="500">
                Write To Us
              </Text>
            </HStack>
            <Text display={{ base: "none", md: "block" }}>
              Fill out our form and we will contact
              <br />
              you within 24 hours.
            </Text>
            <Text my="10px">
              Emails: <br /> abderahmanebaha@gmail.com
            </Text>
            <Text>bahatechnologie@gmail.com</Text>
          </Box>
        </GridItem>
        <GridItem
          borderRadius="10px"
          bg="white"
          display="flex"
          flexDir="column"
          boxShadow="0 0 10px rgba(0,0,0,0.1)"
          area={"main"}
        >
          <HStack p="5px" borderBottom="solid 1px #f3f1ee" bg="">
            <Avatar alignSelf="center" boxSize="30px">
              <AvatarBadge
                boxSize="0.85em"
                bg={online ? "green.500" : "bg.500"}
              />
            </Avatar>
            <Text
              alignSelf="center"
              my="5px"
              color="black"
              fontWeight="400"
              fontSize="xs"
            >
              Technical support <br />
              <Box as="span" fontSize="11px" color="Gray">
                {online ? "online" : "offline"}
              </Box>
            </Text>
          </HStack>
          <Flex flex="1" gap={3} flexDir="column" p="10px">
            {messages.map((message, index) => (
              <Box
                key={index}
                maxW="50%"
                alignSelf={message.from_admin ? "flex-start" : "flex-end"}
                p="10px"
                borderRadius="30px"
                bg={message.from_admin ? "#009688" : "#f0f0f0"}
                color={message.from_admin ? "#ffffff" : "#000000"}
              >
                <Text fontWeight="500">{message.text}</Text>
              </Box>
            ))}
          </Flex>
          <HStack p="10px">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              type="text"
              bg="bg.500"
              borderRadius="30px"
              _hover={{ outline: "none", borderColor: "transparent" }}
              _focus={{
                outline: "none",
                borderColor: "#009688",
                boxShadow: "base",
              }}
              placeholder="Type a message..."
            />
            <Flex
              as="button"
              onClick={data ? handleSendMessage : () => navigate("/login")}
              h="40px"
              w="70px"
              alignItems="center"
              borderRadius="20px"
              justifyContent="center"
              bg="#009688"
            >
              <Icon as={FiSend} boxSize={5} color="#FFFFFF"></Icon>
            </Flex>
          </HStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Contactspage;
