import { Card, CardBody, Heading, Button, Text, Box, Image } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface Product {
    name: string,
    price: number,
    category: string,
    gallery: string[],
    thumbnail: string,
    description: string
    }

interface Props {
    product: Product
}

const ProductCard = ({product} : Props) => {
  return (
    <Card width={"200px"} bgColor={"transparent"}>
          <Image
            src={product.thumbnail}
            width={"200px"}
            height={"200px"}
            objectFit={"cover"}
          />
          <CardBody
            padding={"10px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            border={"0px"}
          >
            <Heading fontSize={"12px"}>{product.name}</Heading>
            <Text fontSize={"13px"} fontWeight={""} color={"brand.500"}>
              ${product.price}
            </Text>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Button
                fontSize={"11px"}
                width={"100%"}
                padding={0}
                height={"30px"}
                variant={"outline"}
                border={"1px solid"}
              >
                Learn more
              </Button>
              <Button
                fontSize={"11px"}
                width={"100%"}
                colorScheme="teal"
                padding={0}
                height={"30px"}
              >
                <AiOutlineShoppingCart size={"15px"} />
                Add to Cart
              </Button>
            </Box>
          </CardBody>
        </Card>
  )
}

export default ProductCard