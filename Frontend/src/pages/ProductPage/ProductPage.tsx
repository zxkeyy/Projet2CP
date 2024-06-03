import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Box,
  Button,
  Divider,
  Heading,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrRotateLeft } from "react-icons/gr";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import useProduct from "../../Hooks/useProduct";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, status, error } = useProduct(id ?? "");

  const product = data?.Product;

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (valueString: string) => {
    const value = parseInt(valueString);
    if (isNaN(value)) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (error || !product) {
    return <div>Error: couldn't find product</div>;
  }

  const gallery = product.gallery.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <Box>
      <Box display="flex" flexDirection={{base:"column", lg:"row"}} justifyContent={"center"}>
        <Box height={"100%"} width={{base:"90%", lg:"40%"}}>
          <ImageGallery
            items={gallery}
            showNav={false}
            thumbnailPosition="left"
            showPlayButton={false}
            useTranslate3D={false}
            slideDuration={0}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{base:"90%", lg:"30%"}}
          paddingLeft={"5%"}
          gap={"20px"}
          minH={"600px"}
        >
          <Heading fontSize={"25px"}>{product.name}</Heading>
          <Text fontSize={"30px"}>${product.price}</Text>
          <Text>{product.description}</Text>
          <Divider border="solid 1px black" />
          <Box display={"flex"} gap={"20px"} alignItems={"center"}>
            <Heading fontSize={"20px"}>Colours:</Heading>
            <RadioGroup
              display={"flex"}
              gap={"15px"}
              alignItems={"center"}
              defaultValue="1"
            >
              <Radio value="1" borderColor="black" colorScheme="teal">
                Red
              </Radio>
              <Radio value="2" borderColor="black" colorScheme="teal">
                Black
              </Radio>
            </RadioGroup>
          </Box>
          <Box display={"flex"} gap={"20px"} alignItems={"center"}>
            <Heading fontSize={"20px"}>Size:</Heading>
            <Select defaultValue={"M"} border="solid 1px black" width={"80px"}>
              <option value={"XS"}>XS</option>
              <option value={"S"}>S</option>
              <option value={"M"}>M</option>
              <option value={"L"}>L</option>
              <option value={"XL"}>XL</option>
            </Select>
          </Box>
          <Box
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Box display={"flex"} width={"50%"}>
              <Button
                size={"lg"}
                border={"1px solid black"}
                borderRightRadius={0}
                variant={"outline"}
                onClick={() =>
                  quantity > 1 ? setQuantity(quantity - 1) : "nothing"
                }
              >
                -
              </Button>
              <NumberInput
                value={quantity}
                onChange={handleQuantityChange}
                size={"lg"}
                min={1}
              >
                <NumberInputField
                  borderTopColor={"black"}
                  borderBottomColor={"black"}
                  borderLeftRadius={0}
                  borderRightRadius={0}
                />
              </NumberInput>
              <Button
                size={"lg"}
                colorScheme="teal"
                //border={"1px solid black"}
                borderLeftRadius={0}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </Box>

            <Button size={"lg"} colorScheme="teal" width={"50%"}>
              Add to Cart
            </Button>
          </Box>
          <Box border={"1px solid black"} borderRadius={"5px"}>
            <Box display={"flex"} padding={"20px"} gap={"20px"}>
              <LiaShippingFastSolid size={"40px"} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Heading fontSize={"15px"}>Free Delivery</Heading>
                <Text fontSize={"13px"}>
                  Enter your postal code for Delivery availability.
                </Text>
              </Box>
            </Box>
            <Divider />
            <Box display={"flex"} padding={"20px"} gap={"20px"}>
              <GrRotateLeft size={"40px"} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Heading fontSize={"15px"}>Return Policy</Heading>
                <Text fontSize={"13px"}>
                  Return within 30 days of receiving your order.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <RelatedProducts product={product} />
    </Box>
  );
};

export default ProductPage;
