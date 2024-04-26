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
} from "@chakra-ui/react";
import Image1 from "../../assets/ProductImage1.png";
import Image2 from "../../assets/ProductImage2.png";
import ImagePayments from "../../assets/Payments.png";

const CheckoutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        mt={5}
        bg="#009688"
        color="bg.500"
        onClick={onOpen}
        _hover={{ bg: "bg.500", color: "#000000", border: "solid 0.5px gray" }}
      >
        Procees to checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent p="10px" bgColor={"bg.500"}>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" padding={"5%"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Heading>Billing Details</Heading>
                <form>
                  <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input type="text" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Company Name</FormLabel>
                      <Input type="text" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Street Adress</FormLabel>
                      <Input type="text" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Apartment, floor, etc...</FormLabel>
                      <Input type="text" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Town/City</FormLabel>
                      <Input type="text" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input type="text" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email Adress</FormLabel>
                      <Input type="email" bgColor="#F5F5F5" />
                    </FormControl>
                    <FormControl>
                      <Checkbox colorScheme="teal">
                        Save this information for faster checkout next time.
                      </Checkbox>
                    </FormControl>
                  </Box>
                </form>
              </Box>
              <Box
                display="flex"
                width={"40%"}
                flexDirection={"column"}
                gap={"40px"}
              >
                <Box
                  display="flex"
                  width={"100%"}
                  flexDirection={"column"}
                  gap={"40px"}
                >
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        marginRight={"30px"}
                        src={Image1}
                        boxSize={"50px"}
                      />
                      <Text>Fire Alarm</Text>
                    </Box>

                    <Text>$650</Text>
                  </Box>
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        marginRight={"30px"}
                        src={Image2}
                        boxSize={"50px"}
                      />
                      <Text>Fire Alarm</Text>
                    </Box>

                    <Text>$650</Text>
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
                    <Text>$1750</Text>
                  </Box>
                  <Divider border="solid 1px black" />
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Shiping:</Text>
                    <Text>Free</Text>
                  </Box>
                  <Divider border="solid 1px black" />
                  <Box
                    display="flex"
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text>Total:</Text>
                    <Text>$1750</Text>
                  </Box>
                  <RadioGroup
                    display="flex"
                    flexDirection={"column"}
                    gap={"30px"}
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
                  <Button colorScheme="teal" marginTop="20px">
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
