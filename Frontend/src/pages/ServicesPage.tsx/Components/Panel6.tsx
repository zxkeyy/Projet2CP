import { Box, Heading, Text } from "@chakra-ui/react"
import { FaCheckCircle } from "react-icons/fa"
import ActionButton from "../../../components/ActionButton"

const Panel6 = () => {
  return (
    <Box
        aspectRatio={1920 / 800}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingTop="5%"
      >
        <Heading>Our Prices</Heading>
        <Box
          marginTop={"5%"}
          display={"flex"}
          justifyContent={"space-between"}
          width={"1000px"}
        >
          <Box width="30%">
            <Box bgColor="#292734" color={"white"} padding="10%">
              <Text fontSize="50px">$199</Text>
              <Text textColor="gray">Basic Plan</Text>
            </Box>
            <Box bgColor="#FAFAFA" padding="10%">
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Free Client Support</Text>
              </Box>
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Easy Implementation</Text>
              </Box>
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Great Private Policy</Text>
              </Box>
              <ActionButton>ORDER NOW</ActionButton>
            </Box>
          </Box>
          <Box width="30%">
            <Box bgColor="#292734" color={"white"} padding="10%">
              <Text fontSize="50px">$199</Text>
              <Text textColor="gray">Basic Plan</Text>
            </Box>
<<<<<<< HEAD
            <Box bgColor="#FAFAFA" padding="10%">
=======
            <Box bgColor="" padding="10%">
>>>>>>> 6616365 (adding google sign in front and back)
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Free Client Support</Text>
              </Box>
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Easy Implementation</Text>
              </Box>
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Great Private Policy</Text>
              </Box>
              <ActionButton>ORDER NOW</ActionButton>
            </Box>
          </Box>
          <Box width="30%">
            <Box bgColor="#292734" color={"white"} padding="10%">
              <Text fontSize="50px">$199</Text>
              <Text textColor="gray">Basic Plan</Text>
            </Box>
<<<<<<< HEAD
            <Box bgColor="#FAFAFA" padding="10%">
=======
            <Box bgColor="" padding="10%">
>>>>>>> 6616365 (adding google sign in front and back)
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Free Client Support</Text>
              </Box>
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Easy Implementation</Text>
              </Box>
              <Box marginBottom="10%" display="flex">
                <FaCheckCircle />
                <Text marginLeft="8px">Great Private Policy</Text>
              </Box>
              <ActionButton>ORDER NOW</ActionButton>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default Panel6