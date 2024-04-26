import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image1 from "../../assets/ProductImage.png";
import {
  Box,
  Button,
  Divider,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Text,
} from "@chakra-ui/react";

//const images = [Image1, Image1, Image1, Image1]
const images = [
  {
    original: Image1,
    thumbnail: Image1,
  },
  {
    original: Image1,
    thumbnail: Image1,
  },
  {
    original: Image1,
    thumbnail: Image1,
  },
];

const ProductPage = () => {
  return (
    <Box display="flex" justifyContent={"space-around"}>
      <Box boxSize={"500px"}>
        <ImageGallery
          items={images}
          showNav={false}
          thumbnailPosition="left"
          showPlayButton={false}
          useTranslate3D={false}
          slideDuration={0}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
        <Heading>HY-IF43DA-EX</Heading>
        <Text>$192.00</Text>
        <Text>
          Point-type Infrared Flame Detector Strong anti-interference ability
          oriented to industries
        </Text>
        <Divider border="solid 1px black" />
        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
          <Text>Colours:</Text>
          <RadioGroup display={"flex"} gap={"15px"} alignItems={"center"}>
            <Radio value="1" borderColor="black" colorScheme="teal">
              Red
            </Radio>
            <Radio value="2" borderColor="black" colorScheme="teal">
              Black
            </Radio>
          </RadioGroup>
        </Box>
        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
          <Text>Size:</Text>
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
          justifyContent={"space-between"}
        >
            <Box display={"flex"} gap={"20px"} alignItems={"center"}><Text>Number:</Text>
          <NumberInput
            size={"lg"}
            maxW={"100px"}
            defaultValue={1}
            min={1}
            borderColor={"black"}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper borderColor={"black"} />
              <NumberDecrementStepper borderColor={"black"} />
            </NumberInputStepper>
          </NumberInput></Box>
          
          <Button size={"lg"} colorScheme="teal">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
