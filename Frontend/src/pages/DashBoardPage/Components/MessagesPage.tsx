import { useState, useEffect } from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import initializeSocket from "../../../services/socket";
import useUserData from "../../../Hooks/useUserData";
import Loadingpage from "../../Loadingpage/Loadingpage";
import axios from "axios";

interface Message {
  userId: string;
  toUserId: string;
  text: string;
  from_admin: boolean;
  timestamp: Date;
}

interface User {
  username: string;
  email: string;
  _id: string;
  role: string;
}

let online: boolean = false;

const MessagesPage = () => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setCurrentUser] = useState<User>({
    username: "user",
    _id: "",
    email: "",
    role: "",
  });
  const [socket, setSocket] = useState<any>(null);
  const { data, isLoading } = useUserData();

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/getAllUsers",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, []);

  useEffect(() => {
    if (user._id) {
      verifyOnline(user);
      getMes(user);
    }
  }, [user]);

  const verifyOnline = async (user: User) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/message/verifyOnlineUser",
        { userId: user._id },
        { withCredentials: true }
      );
      online = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getMes = async (user: User) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/message/getUserConversationForAdmin",
        { userId: user._id },
        { withCredentials: true }
      );

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }

    if (data && data._id) {
      const userId = data._id;

      const socketInstance = initializeSocket();
      setSocket(socketInstance);

      socketInstance.emit("join", { userId });

      // Listen for incoming messages from the server
      socketInstance.on("message", (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        if (socketInstance) {
          socketInstance.disconnect();
        }
      };
    }
  };

  const handleClickUser = (us: User) => {
    setMessages([]);
    setCurrentUser(us);
  };
  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        userId: data?._id || "user_id",
        toUserId: user._id,
        text: inputMessage,
        from_admin: data.role === "admin" ? true : false,
        timestamp: new Date(),
      };

      // Emit the message to the server
      if (socket) {
        await axios.post(
          "http://localhost:5000/message/createMessage",
          newMessage,
          { withCredentials: true }
        );
      }

      // Update local state to immediately display the sent message
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  if (isLoading) {
    return <Loadingpage />; // Replace with your loading indicator/component
  }

  return (
    <Flex flexDir="column" p="10px 50px" gap={5} w="100%">
      <Grid
        w="100%"
        h={window.innerHeight}
        my="100px"
        templateAreas={{ base: `"main" "nav"`, md: `"nav main"` }}
        gridTemplateColumns={{ base: "1fr", md: "25% 75%" }}
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
          gap={5}
        >
          {users.map(
            (user, index) =>
              user?.role !== "admin" && (
                <HStack
                  key={index}
                  h="50px"
                  onClick={() => handleClickUser(user)}
                  bg="bg.500"
                  p="10px"
                  borderRadius="10px"
                  cursor={"pointer"}
                >
                  <Text>{user?.username}</Text>
                </HStack>
              )
          )}
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
              {user.username} <br />
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
                alignSelf={message.from_admin ? "flex-end" : "flex-start"}
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
              onClick={handleSendMessage}
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

export default MessagesPage;
