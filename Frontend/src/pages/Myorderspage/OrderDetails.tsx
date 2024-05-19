import { useModal } from "../../components/Navbar/ModalContext";
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
  } from "@chakra-ui/react";
import OrderProduct from "./orderProduct";
  

const orderDetails = () =>{
    

    const { isOpen, onClose, modalContent } = useModal();
    return(
    <Modal isOpen={isOpen} size="4xl" onClose={onClose}>
    <ModalOverlay bg="rgba(0, 0, 0, 0.083)"  />
    <ModalContent p="10px" bgColor={"bg.500"}>
      <ModalHeader>Products</ModalHeader>
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
        {modalContent?.order.products.map((product: any) => (
          <OrderProduct key={product._id} product={product} />
        ))}
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
}
export default orderDetails;