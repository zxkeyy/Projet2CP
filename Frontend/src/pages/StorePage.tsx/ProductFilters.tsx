import {
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  CheckboxGroup,
  Stack,
  Checkbox,
  Box,
  NumberInput,
  NumberInputField,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const minPriceRange = 0;
const maxPriceRange = 2000;

const ProductFilters = () => {
  const [minPrice, setMinPrice] = useState(minPriceRange);
  const [maxPrice, setMaxPrice] = useState(maxPriceRange);
  const handleMinPriceChange = (value: string) => setMinPrice(parseInt(value));
  const handleMaxPriceChange = (value: string) => setMaxPrice(parseInt(value));

  const [category, setCategory] = useState<string>("");
  const handleCategoryChange = (value: string) => setCategory(value);

  const handleReset = () => {
    setCategory("");
    setMinPrice(minPriceRange);
    setMaxPrice(maxPriceRange);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={"10px"}
      borderWidth={"1px"}
      borderColor={"gray.100"}
      borderRadius={"10px"}
      width={"250px"}
      gap={"10px"}
    >
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Button size={"sm"} width={"40%"} onClick={handleReset}>
          Reset
        </Button>
        <Button size={"sm"} width={"40%"} colorScheme="teal">
          Filter
        </Button>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Category
                  </Box>
                  {isExpanded ? (
                    <FaMinus fontSize="12px" />
                  ) : (
                    <FaPlus fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <RadioGroup
                  onChange={handleCategoryChange}
                  value={category}
                  colorScheme="teal"
                >
                  <Stack>
                    <Radio value="security">Security</Radio>
                    <Radio value="home">Home</Radio>
                    <Radio value="office">Office</Radio>
                    <Radio value="electronics">Electronics</Radio>
                    <Radio value="tools">Tools</Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Price
                  </Box>
                  {isExpanded ? (
                    <FaMinus fontSize="12px" />
                  ) : (
                    <FaPlus fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <NumberInput
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  size={"sm"}
                  min={minPriceRange}
                  max={maxPriceRange}
                >
                  $ Min
                  <NumberInputField />
                </NumberInput>
                <NumberInput
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  size={"sm"}
                  min={minPriceRange}
                  max={maxPriceRange}
                >
                  $ Max
                  <NumberInputField />
                </NumberInput>
                <RangeSlider
                  colorScheme="teal"
                  marginTop={"10px"}
                  aria-label={["min", "max"]}
                  value={[minPrice, maxPrice]}
                  onChange={(value) => {
                    setMinPrice(value[0]);
                    setMaxPrice(value[1]);
                  }}
                  min={minPriceRange}
                  max={maxPriceRange}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProductFilters;
