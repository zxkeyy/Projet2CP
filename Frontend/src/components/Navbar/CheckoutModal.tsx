import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import ImagePayments from "../../assets/Payments.png";
import CheckoutProduct from "./CheckoutProduct";
import { useState } from "react";
import CartService from "../../services/CartService";
import useProducts from "../../Hooks/useProducts";
import useUserData from "../../Hooks/useUserData";
import { useNavigate } from "react-router-dom";
import { Order } from "../../services/postOrder";
import axios from "axios";

const CheckoutModal = () => {
  const navigator = useNavigate();
  const toast = useToast();
  const { data: userData } = useUserData();
  const { data } = useProducts({});
  const Products = data?.Products;
  const [cart] = useState(CartService.getCart());
  let total = 0;
  let ids = [];
  for (let id in cart) {
    ids.push(id);
    if (Products?.find((product) => product._id === id)?.price !== undefined) {
      total =
        total +
        (Products?.find((product) => product._id === id)?.price ?? 0) *
          cart[id].quantity;
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [townCity, setTownCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const [subtotal] = useState(total);
  const [shippingPrice] = useState(0);

  const onSubmit = async () => {
    let order: Order = { products: [], total_price: total };
    for (let id in cart) {
      order.products.push({ productId: id, quantity: cart[id].quantity });
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/orders/createOrder",
        order,
        { withCredentials: true }
      );
      if (response.status === 201) {
        const user: any = response.data;

        toast({
          title: "Order Created!",
          description: `Successfully created your order, ${user.username}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        navigator("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusCode = error.response?.status;
        const message = error.response?.data;

        if (statusCode === 400 && message) {
          toast({
            title: "Creating Order failed",
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

  return (
    <>
      {userData ? (
        <Button
          mt={5}
          bg="#009688"
          color="bg.500"
          onClick={onOpen}
          _hover={{
            bg: "bg.500",
            color: "#000000",
            border: "solid 0.5px gray",
          }}
        >
          Procees to checkout
        </Button>
      ) : (
        <Button
          mt={5}
          bg="#009688"
          color="bg.500"
          onClick={() => navigator("/login")}
          _hover={{
            bg: "bg.500",
            color: "#000000",
            border: "solid 0.5px gray",
          }}
        >
          Procees to checkout
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent p="10px" bgColor={"bg.500"}>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" padding={"5%"}>
            <Box
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
            >
              <Box>
                <Heading>Billing Details</Heading>
                <form>
                  <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type="text"
                        bgColor="#F5F5F5"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Company Name</FormLabel>
                      <Input
                        type="text"
                        bgColor="#F5F5F5"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Street Adress</FormLabel>
                      <Input
                        type="text"
                        bgColor="#F5F5F5"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Apartment, floor, etc...</FormLabel>
                      <Input
                        type="text"
                        bgColor="#F5F5F5"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Town/City</FormLabel>
                      <Input
                        type="text"
                        bgColor="#F5F5F5"
                        value={townCity}
                        onChange={(e) => setTownCity(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="tel"
                        bgColor="#F5F5F5"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email Adress</FormLabel>
                      <Input
                        type="email"
                        bgColor="#F5F5F5"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <Checkbox
                        colorScheme="teal"
                        border={"black 1px"}
                        checked={saveInfo}
                        onChange={(e) => setSaveInfo(e.target.checked)}
                      >
                        Save this information for faster checkout next time.
                      </Checkbox>
                    </FormControl>
                  </Box>
                </form>
              </Box>
              <Box
                display="flex"
                //width={"40%"}
                flexDirection={"column"}
                gap={"40px"}
              >
                <Box
                  display="flex"
                  width={"100%"}
                  flexDirection={"column"}
                  gap={"40px"}
                  maxH={"300px"}
                  overflowY={"scroll"}
                  dir="rtl"
                  paddingLeft={"10px"}
                >
                  <Box
                    dir="ltr"
                    display="flex"
                    width={"100%"}
                    flexDirection={"column"}
                    gap={"40px"}
                  >
                    {ids.map((id) => (
                      <CheckoutProduct key={id} id={id} />
                    ))}
                  </Box>
                </Box>
                <Box display="flex" flexDirection={"column"} gap={"10px"}>
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Subtotal:</Text>
                    <Text>${subtotal}</Text>
                  </Box>
                  <Divider border="solid 1px black" />
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Shiping:</Text>
                    <Text>
                      {shippingPrice > 0 ? "$" + shippingPrice : "Free"}
                    </Text>
                  </Box>
                  <Divider border="solid 1px black" />
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Total:</Text>
                    <Text>${subtotal + shippingPrice}</Text>
                  </Box>
                  <RadioGroup
                    display="flex"
                    flexDirection={"column"}
                    gap={"20px"}
                    marginTop={"10px"}
                  >
                    <Box
                      display="flex"
                      width={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Radio value="1" borderColor="black" colorScheme="teal">
                        Bank
                      </Radio>
                      <Image src={ImagePayments} />
                    </Box>
                    <Box
                      display="flex"
                      width={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Radio value="2" borderColor="black" colorScheme="teal">
                        Cash on delivery
                      </Radio>
                    </Box>
                  </RadioGroup>
                  <Box display={"flex"} gap={"10px"} marginTop={"20px"}>
                    <Input
                      placeholder="Coupon Code"
                      fontSize={"12px"}
                      border={"1px"}
                    ></Input>
                    <Button colorScheme="teal" fontSize={"12px"}>
                      Apply Coupon
                    </Button>
                  </Box>
                  <Button
                    colorScheme="teal"
                    marginTop="20px"
                    onClick={onSubmit}
                  >
                    Place Order
                  </Button>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutModal;
