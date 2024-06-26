import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Input,
  HStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useModal } from "./ModalContext";
import CheckoutModal from "./CheckoutModal";
import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";
import CartService from "../../services/CartService";
import useProducts from "../../Hooks/useProducts";

const MyModal = () => {
  const { isOpen, onClose } = useModal();

  const { data } = useProducts({});
  const Products = data?.Products;
  const [cart, setCart] = useState(CartService.getCart());
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

  const [subtotal, setSubtotal] = useState(total);
  const [shippingPrice] = useState(0);

  useEffect(() => {
    let ids = [];
    for (let id in cart) {
      ids.push(id);
      if (
        Products?.find((product) => product._id === id)?.price !== undefined
      ) {
        total =
          total +
          (Products?.find((product) => product._id === id)?.price ?? 0) *
            cart[id].quantity;
      }
    }
    setSubtotal(total);
  }),
    [cart];

  useEffect(() => {
    const handleStorageChange = () => {
      setCart(CartService.getCart());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="10px" bgColor={"bg.500"}>
        <ModalHeader>Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap="15px">
          <Flex
            justifyContent="space-between"
            borderRadius="4px"
            alignItems="center"
            bgColor="#FFFFFF"
            p="15px"
            boxShadow="base"
          >
            <Text width={"40%"}>Product</Text>
            <Flex justifyContent="space-between" width={"60%"}>
              <Text width="25%">Price</Text>
              <Text width="15%">Quantity</Text>
              <Text width="15%">Subtotal</Text>
            </Flex>
          </Flex>
          {ids.map((id) => (
            <CartProduct key={id} id={id} />
          ))}

          <Flex justifyContent="space-between">
            <Button
              border="solid 0.5px gray"
              colorScheme="Black"
              variant="outline"
              _hover={{ bg: "#009688", color: "bg.500", border: "none" }}
              onClick={() => {
                setCart(CartService.getCart());
                let totalTemp = 0;
                for (let id in cart) {
                  if (
                    Products?.find((product) => product._id === id)?.price !==
                    undefined
                  ) {
                    totalTemp =
                      totalTemp +
                      (Products?.find((product) => product._id === id)?.price ??
                        0) *
                        cart[id].quantity;
                  }
                }

                setSubtotal(totalTemp);
              }}
            >
              Refresh
            </Button>
            <Button
              border="solid 0.5px gray"
              colorScheme="Black"
              variant="outline"
              _hover={{ bg: "#009688", color: "bg.500", border: "none" }}
              onClick={() => CartService.clearCart()}
            >
              Clear Cart
            </Button>
          </Flex>
          <Flex
            justifyContent="space-between"
            gap={2}
            mt={{ base: "0px", md: "10px" }}
            flexWrap="wrap"
          >
            <HStack alignSelf="flex-start">
              <Input
                placeholder="Coupon Code"
                border="solid 0.5px gray"
                w="150px"
                borderRadius="4px"
                focusBorderColor="blue.300"
              ></Input>
              <Button
                bg="#009688"
                color="bg.500"
                onClick={onClose}
                _hover={{
                  bg: "bg.500",
                  color: "#000000",
                  border: "solid 0.5px gray",
                }}
              >
                Apply Coupon
              </Button>
            </HStack>
            <Flex
              flexDir="column"
              w="300px"
              gap={2}
              border="solid 1px black"
              borderRadius="4px"
              p={{ base: "10px", md: "20px" }}
              mt="20px"
            >
              <Heading fontSize="xl">Cart Total</Heading>
              <Flex justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>${subtotal}</Text>
              </Flex>
              <Divider />
              <Flex justifyContent="space-between">
                <Text>Shiping</Text>
                <Text>{shippingPrice > 0 ? "$" + shippingPrice : "Free"}</Text>
              </Flex>
              <Divider />
              <Flex justifyContent="space-between">
                <Text>Total</Text>
                <Text>${subtotal + shippingPrice}</Text>
              </Flex>
              <CheckoutModal />
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            mt={5}
            bg="#009688"
            color="bg.500"
            onClick={onClose}
            _hover={{
              bg: "bg.500",
              color: "#000000",
              border: "solid 0.5px gray",
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
