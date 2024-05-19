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
  

const orderDetails = () =>{

    const { isOpen, onClose } = useModal();
    return(
    <Modal isOpen={isOpen} size="xl" onClose={onClose}>
    <ModalOverlay bg="rgba(0, 0, 0, 0.083)"  />
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
        <Flex
          justifyContent="space-between"
          gap={2}
          mt={{ base: "0px", md: "10px" }}
          flexWrap="wrap"
        >
          
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
}
export default orderDetails;