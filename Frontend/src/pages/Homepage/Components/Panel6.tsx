import { Heading, Text, Box } from "@chakra-ui/react";
import Image1 from "../../../assets/Panel6Image1.png";
import Image2 from "../../../assets/Panel6Image2.png";
import Image3 from "../../../assets/Panel6Image3.png";
import ActionButton from "../../../components/ActionButton";

const Panel6 = () => {
  return (
    <Box
      aspectRatio={1920 / 800}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading>Our Projects</Heading>
      <Box
        marginTop={"5%"}
        display={"flex"}
        justifyContent={"space-between"}
        color={"white"}
        width={"1000px"}
      >
        <Box
          aspectRatio={350 / 425}
          bgImage={Image1}
          bgSize={"100%"}
          width={"300px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          padding={"3%"}
        >
          <Text fontSize={"14px"}>WIRELESS CAMS</Text>
          <Heading fontSize={"22px"}>Confidential information</Heading>
        </Box>
        <Box
          aspectRatio={350 / 425}
          bgImage={Image2}
          bgSize={"100%"}
          width={"300px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          padding={"3%"}
        >
          <Text fontSize={"14px"}>ALARMS & LOCKS</Text>
          <Heading fontSize={"22px"}>Fingerprint Door Lock</Heading>
        </Box>
        <Box
          aspectRatio={350 / 425}
          bgImage={Image3}
          bgSize={"101%"}
          width={"300px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          padding={"3%"}
        >
          <Text fontSize={"14px"}>HOME SECURITY</Text>
          <Heading fontSize={"22px"}>Smartphone Home App</Heading>
        </Box>
      </Box>
      <ActionButton marginY={"5%"} fontSize={"12px"}>
        More About Projects
      </ActionButton>
    </Box>
  );
};

export default Panel6;
