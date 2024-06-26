import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCategories from "../../../Hooks/useCategories";

const AddProductPage = () => {
  const navigator = useNavigate();
  const toast = useToast();

  const { data: categories } = useCategories();
  console.log(categories);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [gallery, setGallery] = useState<File[] | null>(null);
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [sku, setSku] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [regularPrice, setRegularPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const onSubmit = async () => {
    const form = new FormData();
    form.append("thumbnail", thumbnail ?? "");
    form.append("name", productName);
    form.append("description", description);
    form.append("category", category);
    form.append("brandName", brandName);
    form.append("sku", sku);
    form.append("qty", stockQuantity.toString());
    form.append("regularPrice", regularPrice.toString());
    form.append("price", price.toString());
    gallery?.forEach((image) => form.append("gallery", image));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/",
        form,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response);

      if (response.status === 201 || response.status === 200) {
        toast({
          title: "Product Created",
          description: "Product has been created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        navigator("/store/product/" + response.data._id);
      }
    } catch (error) {
      console.log(error);
      alert("Creating Product Failed");
    }
  };

  return (
    <Box width={"100%"}>
      <Flex padding={"1%"} width={"100%"} gap={"30px"}>
        <Flex flexDirection={"column"} gap={"20px"} width={"40%"}>
          <FormControl isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input
              type="text"
              bgColor="white"
              placeholder="Type name here"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              bgColor="white"
              placeholder="Type description here"
              height={"200px"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              bgColor={"white"}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {categories?.allCategories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
            
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Brand Name</FormLabel>
            <Input
              type="text"
              bgColor="white"
              placeholder="Type brand name here"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </FormControl>
          <Flex gap={"20px"}>
            <FormControl isRequired>
              <FormLabel>SKU</FormLabel>
              <Input
                type="text"
                bgColor="white"
                placeholder="Fox-3983"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Stock Quantity</FormLabel>
              <Input
                type="number"
                bgColor="white"
                placeholder="99"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
              />
            </FormControl>
          </Flex>
          <Flex gap={"20px"}>
            <FormControl isRequired>
              <FormLabel>Regular Price</FormLabel>
              <Input
                type="number"
                bgColor="white"
                placeholder="$99"
                value={regularPrice}
                onChange={(e) => setRegularPrice(Number(e.target.value))}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                bgColor="white"
                placeholder="$99"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"20px"} width={"40%"}>
          <FormControl isRequired>
            <FormLabel>Thumbnail</FormLabel>
            <Input
              hidden
              id="thumbnail"
              type="file"
              onChange={(e) => setThumbnail(e.target.files?.[0] ?? null)}
            ></Input>
            <label htmlFor="thumbnail">
              <Box
                width={"100%"}
                aspectRatio={"1"}
                bgColor={"#C8C8C8"}
                borderRadius={"3%"}
                cursor={"pointer"}
                overflow={"hidden"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {!thumbnail && <FaSquarePlus size={"50%"} color="gray" />}
                {thumbnail && (
                  <Image
                    src={URL.createObjectURL(thumbnail)}
                    alt="thumbnail"
                    width="100%"
                    height="100%"
                  />
                )}
              </Box>
            </label>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Gallery</FormLabel>

            <Input
              hidden
              id="gallery"
              type="file"
              onChange={(e) => {
                if (e.target.files?.[0])
                  setGallery([...(gallery ?? []), e.target.files?.[0]]);
              }}
            />
            <Flex
              gap={"10px"}
              padding={"1%"}
              bgColor={"#DDDDDD"}
              borderRadius={"10px"}
            >
              {gallery?.map((image, index) => (
                <Box
                  key={index}
                  boxSize={"100px"}
                  bgColor={"#C8C8C8"}
                  border={"1px solid #BABABA"}
                  borderRadius={"10%"}
                  overflow={"hidden"}
                >
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="thumbnail"
                    width="100%"
                    height="100%"
                  />
                </Box>
              ))}
            </Flex>
            <label htmlFor="gallery">
              <Flex
                marginTop="10px"
                bgColor={"#319795"}
                justifyContent={"center"}
                paddingY={"10px"}
                borderRadius={"5px"}
                cursor={"pointer"}
              >
                <Text textColor={"white"} fontWeight={"bold"}>
                  Add Image(s)
                </Text>
              </Flex>
            </label>
          </FormControl>
        </Flex>
      </Flex>
      <Button colorScheme="teal" width={"81%"} onClick={onSubmit}>
        Add Product
      </Button>
    </Box>
  );
};

export default AddProductPage;