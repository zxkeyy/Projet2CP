import { Box, Heading, Text } from "@chakra-ui/react"
import Image1 from "../../../assets/Panel2Image1.png"
import Image2 from "../../../assets/Panel2Image2.png"

const Panel2 = () => {
  return (
    <Box aspectRatio={1920 / 363} width={"100%"} display={"flex"}>
        <Box
          width={"50%"}
          height={"100%"}
          bgColor={"brand.500"}
          bgImage={Image1}
          bgSize={"100%"}
          paddingLeft={"20%"}
          paddingTop={"5%"}
        >
          <Heading color={"white"} fontSize={window.innerWidth / 50}>High Security services</Heading>
          <Box color={"grey"} fontSize={window.innerWidth / 100} display={"flex"} marginTop={"5%"} >
            <Box marginRight={"20%"}>
              <Text>Mobile Guarding</Text>
              <Text>Remote Guarding</Text>
              <Text>Electronic security</Text>
            </Box>
            <Box>
              <Text>Integrated Guarding</Text>
              <Text>Fire and Safety services</Text>
              <Text>On-site security</Text>
            </Box>
          </Box>
        </Box>
        <Box
          width={"50%"}
          height={"100%"}
          bgColor={"brand.500"}
          bgImage={Image2}
          bgSize={"100%"}
          paddingLeft={"5%"}
          paddingTop={"5%"}
        >
          <Heading maxWidth={"50%"} fontSize={window.innerWidth / 50}>Fast Response Time Guaranteed</Heading>
          <Text color={"#51706D"} fontSize={window.innerWidth / 40} fontWeight={"bold"}>+2136 60 61 23 35</Text>
        </Box>
      </Box>
  )
}

export default Panel2